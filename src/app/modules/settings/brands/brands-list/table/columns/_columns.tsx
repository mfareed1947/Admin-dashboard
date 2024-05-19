// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { Brand } from '../../../core/_models';
import { BrandActiveCell } from './BrandActiveCell';
import { BrandCreationCell } from './BrandCreationCell';
import { BrandActionsCell } from './BrandActionsCell';

const columnHelper = createColumnHelper<Brand>();

const brandsColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  // columnHelper.accessor('brand', {
  //   header: 'Type',
  //   cell: (props) => props.getValue(),
  // }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <BrandActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <BrandCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <BrandActionsCell id={props.row.original.id} />,
  }),
];

export { brandsColumns };
