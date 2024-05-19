import { KTCard } from '../../../../../_metronic/helpers';
import { CitiesListHeader } from './components/header/CitiesListHeader';
import { CitiesTable } from './table/CitiesTable';
import { CityFormModal } from '../city-form-modal/CityFormModal';
import { useListView } from '../core/ListViewProvider';

const CitiesList = () => {
  console.log('cities list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <CitiesListHeader />
        <CitiesTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <CityFormModal />}
    </>
  );
};

export { CitiesList };
