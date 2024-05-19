import { StatesListSearchComponent } from './StatesListSearchComponent';
import { StatesListToolbar } from './StatesListToolbar';

const StatesListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <StatesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <StatesListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { StatesListHeader };
