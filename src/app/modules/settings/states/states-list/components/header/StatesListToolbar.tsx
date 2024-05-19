import { useListView } from '../../../core/ListViewProvider';

const StatesListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddStateModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-state-table-toolbar='base'>
      {/* begin::Add state */}
      <button type='button' className='btn btn-primary' onClick={openAddStateModal}>
        Add State
      </button>
      {/* end::Add state */}
    </div>
  );
};

export { StatesListToolbar };
