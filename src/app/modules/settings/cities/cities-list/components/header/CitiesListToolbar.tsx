import { useListView } from '../../../core/ListViewProvider';

const CitiesListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddCityModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-city-table-toolbar='base'>
      {/* begin::Add city */}
      <button type='button' className='btn btn-primary' onClick={openAddCityModal}>
        Add City
      </button>
      {/* end::Add city */}
    </div>
  );
};

export { CitiesListToolbar };
