import { KTCard } from '../../../../../_metronic/helpers';
import { GeneratorsListHeader } from './components/header/GeneratorsListHeader';
import { GeneratorsTable } from './table/GeneratorsTable';

const GeneratorsList = () => {
  console.log('Generator List');

  return (
    <KTCard>
      <GeneratorsListHeader />
      <GeneratorsTable />
    </KTCard>
  );
};

export { GeneratorsList };
