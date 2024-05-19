import { Link } from 'react-router-dom';

const GeneratorsListToolbar = () => {
  return (
    <div className='d-flex justify-content-end' data-kt-generator-table-toolbar='base'>
      {/* begin::Add generator */}
      <Link className='btn btn-primary' to='new'>
        Add Generator
      </Link>
      {/* end::Add generator */}
    </div>
  );
};

export { GeneratorsListToolbar };
