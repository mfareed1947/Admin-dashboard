import { CountriesListSearchComponent } from './CountriesListSearchComponent';
import { CountriesListToolbar } from './CountriesListToolbar';

const CountriesListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <CountriesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <CountriesListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { CountriesListHeader };
