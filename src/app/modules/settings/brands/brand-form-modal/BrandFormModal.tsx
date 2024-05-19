import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-bootstrap/Modal';
import { BrandForm } from './BrandForm';
import { isNotEmpty } from '../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getBrandById } from '../core/_requests';
import { initialBrand, BrandTypes } from '../core/_models';

const BrandFormModal = () => {
  console.log('brand form modal');

  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);
  const {
    isFetching,
    data: brand,
    error,
  } = useQuery(
    ['brand', itemIdForUpdate],
    () => {
      return getBrandById(itemIdForUpdate);
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

  const modalHeading = brand ? `Edit Brand '${brand.name}'` : 'Add Brand';

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

      {itemIdForUpdate === null && <BrandForm brand={initialBrand} types={BrandTypes} />}

      {itemIdForUpdate && brand && <BrandForm brand={brand} types={BrandTypes} />}
    </Modal>
  );
};

export { BrandFormModal };
