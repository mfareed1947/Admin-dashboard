import { PhasesListSearchComponent } from './PhasesListSearchComponent';
import { PhasesListToolbar } from './PhasesListToolbar';

const PhasesListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <PhasesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <PhasesListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { PhasesListHeader };
