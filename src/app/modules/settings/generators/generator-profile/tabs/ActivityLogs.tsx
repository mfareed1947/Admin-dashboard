import { KTSVG } from '../../../../../../_metronic/helpers';

type Props = {};

const ActivityLogs: React.FC<Props> = () => {
  return (
    <div className={`card mb-5 mb-xl-8`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Activity Logs</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>Activity</th>
                <th className='min-w-140px'>On Time</th>
                <th className='min-w-120px'>Voltage</th>
                <th className='min-w-120px'>Frequency</th>
                <th className='min-w-120px'>Log Time</th>
                <th className='min-w-120px'>Status</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <span className='text-dark fw-bold text-hover-primary fs-6'>On Time</span>
                </td>
                <td>
                  <span className='text-dark fw-bold text-hover-primary fs-6'>
                    20-Nov-2022 10:00 PM
                  </span>
                </td>
                <td>
                  <span className='text-dark fw-bold text-hover-primary fs-6'>220</span>
                </td>
                <td>
                  <span className='text-dark fw-bold text-hover-primary fs-6'>50</span>
                </td>
                <td className='text-dark fw-bold text-hover-primary fs-6'>20-Nov-2022 10:00 PM</td>
                <td>
                  <span className='badge badge-light-success'>ON</span>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { ActivityLogs };
