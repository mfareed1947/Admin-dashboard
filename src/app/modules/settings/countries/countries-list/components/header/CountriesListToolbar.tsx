import { useListView } from '../../../core/ListViewProvider';

const CountriesListToolbar = () => {
  const { setItemIdForUpdate } = useListView();
  const openAddCountryModal = () => {
    setItemIdForUpdate(null);
  };

  return (
    <div className='d-flex justify-content-end' data-kt-country-table-toolbar='base'>
      {/* begin::Add country */}
      <button type='button' className='btn btn-primary' onClick={openAddCountryModal}>
        Add Country
      </button>
      {/* end::Add country */}
    </div>
  );
};

export { CountriesListToolbar };
