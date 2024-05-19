import { KTCard } from '../../../../../_metronic/helpers';
import { StatesListHeader } from './components/header/StatesListHeader';
import { StatesTable } from './table/StatesTable';
import { StateFormModal } from '../state-form-modal/StateFormModal';
import { useListView } from '../core/ListViewProvider';

const StatesList = () => {
  console.log('states list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <StatesListHeader />
        <StatesTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <StateFormModal />}
    </>
  );
};

export { StatesList };
