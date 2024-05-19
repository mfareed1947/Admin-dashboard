import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { StateForm } from './StateForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getStateById } from '../core/_requests';
import { getCountries } from '../../countries/core/_requests';
import { initialState } from '../core/_models';

const StateFormModal = () => {
  console.log('state form modal');

  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const stateQuery = useQuery(
    ['state', itemIdForUpdate],
    () => {
      return getStateById(itemIdForUpdate);
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

  const countriesQuery = useQuery(
    ['countries'],
    () => {
      return getCountries();
    },
    {
      cacheTime: 0,
      retry: false,
      onError: (error) => {},
    }
  );

  if (stateQuery.isFetching || countriesQuery.isFetching) return <h1>Loading</h1>;

  if (stateQuery.error || countriesQuery.error) return null;

  const modalHeading = stateQuery.data ? `Edit State '${stateQuery.data.name}'` : 'Add State';

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

      {itemIdForUpdate === null && countriesQuery.data && (
        <StateForm state={initialState} countries={countriesQuery.data} />
      )}

      {itemIdForUpdate && stateQuery.data && countriesQuery.data && (
        <StateForm state={stateQuery.data} countries={countriesQuery.data} />
      )}
    </Modal>
  );
};

export { StateFormModal };
