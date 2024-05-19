import { CitiesListSearchComponent } from './CitiesListSearchComponent';
import { CitiesListToolbar } from './CitiesListToolbar';

const CitiesListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <CitiesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <CitiesListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { CitiesListHeader };
