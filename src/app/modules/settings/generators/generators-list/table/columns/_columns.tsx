// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { Generator } from '../../../core/_models';
import { GeneratorActiveCell } from './GeneratorActiveCell';
import { GeneratorCreationCell } from './GeneratorCreationCell';
import { GeneratorActionsCell } from './GeneratorActionsCell';

const columnHelper = createColumnHelper<Generator>();

const generatorsColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  // columnHelper.accessor('country', {
  //   header: 'Country',
  //   cell: (props) => props.getValue(),
  // }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <GeneratorActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <GeneratorCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <GeneratorActionsCell id={props.row.original.id} />,
  }),
];

export { generatorsColumns };
