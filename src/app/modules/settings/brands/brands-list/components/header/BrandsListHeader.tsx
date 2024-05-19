import { BrandsListSearchComponent } from './BrandsListSearchComponent';
import { BrandsListToolbar } from './BrandsListToolbar';

const BrandsListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <BrandsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <BrandsListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { BrandsListHeader };
