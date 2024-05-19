import { KTCard } from '../../../../../_metronic/helpers';
import { BrandsListHeader } from './components/header/BrandsListHeader';
import { BrandsTable } from './table/BrandsTable';
import { BrandFormModal } from '../brand-form-modal/BrandFormModal';
import { useListView } from '../core/ListViewProvider';

const BrandsList = () => {
  console.log('brands list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <BrandsListHeader />
        <BrandsTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <BrandFormModal />}
    </>
  );
};

export { BrandsList };
