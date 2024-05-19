import { useMemo } from 'react';
import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { KTCardBody } from '../../../../../../_metronic/helpers';
import { BrandsListLoading } from '../components/loading/BrandsListLoading';
import { useQueryResponseData, useQueryResponseLoading } from '../../core/QueryResponseProvider';
import { brandsColumns } from './columns/_columns';

const BrandsTable = () => {
  console.log('brands table');

  const brands = useQueryResponseData();
  const isLoading = useQueryResponseLoading();
  const data = useMemo(() => brands, [brands]);
  const columns = useMemo(() => brandsColumns, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='text-gray-600 fw-bold'>
            {data.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={clsx({ 'text-end min-w-100px': cell.column.id === 'actions' })}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No Records Found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isLoading && <BrandsListLoading />}
    </KTCardBody>
  );
};

export { BrandsTable };
