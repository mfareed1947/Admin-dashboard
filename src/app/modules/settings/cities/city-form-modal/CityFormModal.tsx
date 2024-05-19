import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { CityForm } from './CityForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getCityById } from '../core/_requests';
import { getStates } from '../../states/core/_requests';
import { initialCity } from '../core/_models';

const CityFormModal = () => {
  console.log('city form modal');

  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const cityQuery = useQuery(
    ['city', itemIdForUpdate],
    () => {
      return getCityById(itemIdForUpdate);
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

  const statesQuery = useQuery(
    ['states'],
    () => {
      return getStates();
    },
    {
      cacheTime: 0,
      retry: false,
      onError: (error) => {},
    }
  );

  if (cityQuery.isFetching || statesQuery.isFetching) return <h1>Loading</h1>;

  if (cityQuery.error || statesQuery.error) return null;

  const modalHeading = cityQuery.data ? `Edit City '${cityQuery.data.name}'` : 'Add City';

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

      {itemIdForUpdate === null && statesQuery.data && (
        <CityForm city={initialCity} states={statesQuery.data} />
      )}

      {itemIdForUpdate && cityQuery.data && statesQuery.data && (
        <CityForm city={cityQuery.data} states={statesQuery.data} />
      )}
    </Modal>
  );
};

export { CityFormModal };
