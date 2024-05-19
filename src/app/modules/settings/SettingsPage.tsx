import CountriesPage from './countries/CountriesPage';
import StatesPage from './states/StatesPage';
import CitiesPage from './cities/CitiesPage';
import NeighbourhoodsPage from './neighbourhoods/NeighbourhoodsPage';
import PhasesPage from './phases/PhasesPage';
import GeneratorsPage from './generators/GeneratorsPage';
import BrandsPage from './brands/BrandsPage';

const SettingsPage = () => {
  return (
    <>
      <CountriesPage />
      <StatesPage />
      <CitiesPage />
      <NeighbourhoodsPage />
      <PhasesPage />
      <GeneratorsPage />
      <BrandsPage />
    </>
  );
};

export default SettingsPage;
