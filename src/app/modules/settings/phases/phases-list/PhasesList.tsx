import { KTCard } from '../../../../../_metronic/helpers';
import { PhasesListHeader } from './components/header/PhasesListHeader';
import { PhasesTable } from './table/PhasesTable';
import { PhaseFormModal } from '../phase-form-modal/PhaseFormModal';
import { useListView } from '../core/ListViewProvider';

const PhasesList = () => {
  console.log('phases list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <PhasesListHeader />
        <PhasesTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <PhaseFormModal />}
    </>
  );
};

export { PhasesList };
