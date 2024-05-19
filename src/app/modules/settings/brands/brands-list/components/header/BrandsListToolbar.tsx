import { useListView } from '../../../core/ListViewProvider';

const BrandsListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddBrandModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-brand-table-toolbar='base'>
      {/* begin::Add brand */}
      <button type='button' className='btn btn-primary' onClick={openAddBrandModal}>
        Add Brand
      </button>
      {/* end::Add brand */}
    </div>
  );
};

export { BrandsListToolbar };
