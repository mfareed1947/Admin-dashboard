import { useListView } from '../../../core/ListViewProvider';

const PhasesListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddPhaseModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-phase-table-toolbar='base'>
      {/* begin::Add phase */}
      <button type='button' className='btn btn-primary' onClick={openAddPhaseModal}>
        Add Phase
      </button>
      {/* end::Add phase */}
    </div>
  );
};

export { PhasesListToolbar };
