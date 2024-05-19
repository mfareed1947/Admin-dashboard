import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { PhaseForm } from './PhaseForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getPhaseById } from '../core/_requests';
import { getNeighbourhoods } from '../../neighbourhoods/core/_requests';
import { initialPhase } from '../core/_models';

const PhaseFormModal = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const phaseQuery = useQuery(
    ['phase', itemIdForUpdate],
    () => {
      return getPhaseById(itemIdForUpdate);
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

  const neighbourhoodsQuery = useQuery(
    ['neighbourhoods'],
    () => {
      return getNeighbourhoods();
    },
    {
      cacheTime: 0,

      retry: false,
      onError: (error) => {},
    }
  );

  if (phaseQuery.isFetching || neighbourhoodsQuery.isFetching) return <h1>Loading</h1>;

  if (phaseQuery.error || neighbourhoodsQuery.error) return null;

  const modalHeading = phaseQuery.data ? `Edit Phase '${phaseQuery.data.name}'` : 'Add Phase';

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

      {itemIdForUpdate === null && neighbourhoodsQuery.data && (
        <PhaseForm phase={initialPhase} neighbourhoods={neighbourhoodsQuery.data} />
      )}

      {itemIdForUpdate && phaseQuery.data && neighbourhoodsQuery.data && (
        <PhaseForm phase={phaseQuery.data} neighbourhoods={neighbourhoodsQuery.data} />
      )}
    </Modal>
  );
};

export { PhaseFormModal };
