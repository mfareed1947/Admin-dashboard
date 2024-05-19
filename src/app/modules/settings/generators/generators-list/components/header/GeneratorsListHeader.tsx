import { GeneratorsListSearchComponent } from './GeneratorsListSearchComponent';
import { GeneratorsListToolbar } from './GeneratorsListToolbar';

const GeneratorsListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <GeneratorsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <GeneratorsListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { GeneratorsListHeader };
