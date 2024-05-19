import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { CountryForm } from './CountryForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getCountryById } from '../core/_requests';
import { initialCountry } from '../core/_models';

const CountryFormModal = () => {
  console.log('country form modal');

  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const {
    isFetching,
    data: country,
    error,
  } = useQuery(
    ['country', itemIdForUpdate],
    () => {
      return getCountryById(itemIdForUpdate);
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

  if (isFetching) return <h1>Loading</h1>;

  if (error) return null;

  const modalHeading = country ? `Edit Country '${country.name}'` : 'Add Country';

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

      {itemIdForUpdate === null && <CountryForm country={initialCountry} />}

      {itemIdForUpdate && country && <CountryForm country={country} />}
    </Modal>
  );
};

export { CountryFormModal };
