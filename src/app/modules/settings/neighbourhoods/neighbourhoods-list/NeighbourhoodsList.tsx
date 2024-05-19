import { KTCard } from '../../../../../_metronic/helpers';
import { NeighbourhoodsListHeader } from './components/header/NeighbourhoodsListHeader';
import { NeighbourhoodsTable } from './table/NeighbourhoodsTable';
import { NeighbourhoodFormModal } from '../neighbourhood-form-modal/NeighbourhoodFormModal';
import { useListView } from '../core/ListViewProvider';

const NeighbourhoodsList = () => {
  console.log('Neighbourhoods list');

  const { itemIdForUpdate } = useListView();

  return (
    <>
      <KTCard>
        <NeighbourhoodsListHeader />
        <NeighbourhoodsTable />
      </KTCard>

      {itemIdForUpdate !== undefined && <NeighbourhoodFormModal />}
    </>
  );
};

export { NeighbourhoodsList };
