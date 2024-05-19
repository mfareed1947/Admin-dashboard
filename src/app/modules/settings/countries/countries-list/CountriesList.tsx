import { KTCard } from '../../../../../_metronic/helpers';
import { CountriesListHeader } from './components/header/CountriesListHeader';
import { CountriesTable } from './table/CountriesTable';
import { CountryFormModal } from '../country-form-modal/CountryFormModal';
import { useListView } from '../core/ListViewProvider';

const CountriesList = () => {
  console.log('countries list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <CountriesListHeader />
        <CountriesTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <CountryFormModal />}
    </>
  );
};

export { CountriesList };
