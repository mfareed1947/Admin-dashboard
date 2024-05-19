import { useListView } from '../../../core/ListViewProvider';

const NeighbourhoodsListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddNeighbourhoodModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-shift-table-toolbar='base'>
      {/* begin::Add shift */}
      <button type='button' className='btn btn-primary' onClick={openAddNeighbourhoodModal}>
        Add Neighbourhood
      </button>
      {/* end::Add shift */}
    </div>
  );
};

export { NeighbourhoodsListToolbar };
