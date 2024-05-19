import { NeighbourhoodsListSearchComponent } from './NeighbourhoodsListSearchComponent';
import { NeighbourhoodsListToolbar } from './NeighbourhoodsListToolbar';

const NeighbourhoodsListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <NeighbourhoodsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <NeighbourhoodsListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { NeighbourhoodsListHeader };
