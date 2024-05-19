import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { NeighbourhoodForm } from './NeighbourhoodForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getNeighbourhoodById } from '../core/_requests';
import { getCities } from '../../cities/core/_requests';
import { initialNeighbourhood } from '../core/_models';

const NeighbourhoodFormModal = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const neighbourhoodQuery = useQuery(
    ['neighbourhood', itemIdForUpdate],
    () => {
      return getNeighbourhoodById(itemIdForUpdate);
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      retry: false,
      onError: (error) => {
        setItemIdForUpdate(undefined);
        if (axios.isAxiosError(error)) {
          if (!error?.response) {
            alert('No Server Response');
          } else if (error.response?.status === 400) {
            alert('Missing Username or Password');
          } else if (error.response?.status === 401) {
            alert('Unauthorized');
          } else if (error.response?.status === 404) {
            alert('Not Found');
          } else {
            alert('Login Failed');
          }
        }
      },
    }
  );

  const citiesQuery = useQuery(
    ['cities'],
    () => {
      return getCities();
    },
    {
      cacheTime: 0,

      retry: false,
      onError: (error) => {},
    }
  );

  if (neighbourhoodQuery.isFetching || citiesQuery.isFetching) return <h1>Loading</h1>;

  if (neighbourhoodQuery.error || citiesQuery.error) return null;

  const modalHeading = neighbourhoodQuery.data
    ? `Edit Neighbourhood '${neighbourhoodQuery.data.name}'`
    : 'Add Neighbourhood';

  return (
    <Modal
      show={true}
      backdrop='static'
      keyboard={false}
      onHide={() => setItemIdForUpdate(undefined)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>

      {itemIdForUpdate === null && citiesQuery.data && (
        <NeighbourhoodForm neighbourhood={initialNeighbourhood} cities={citiesQuery.data} />
      )}

      {itemIdForUpdate && neighbourhoodQuery.data && citiesQuery.data && (
        <NeighbourhoodForm neighbourhood={neighbourhoodQuery.data} cities={citiesQuery.data} />
      )}
    </Modal>
  );
};

export { NeighbourhoodFormModal };
