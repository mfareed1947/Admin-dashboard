// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { Phase } from '../../../core/_models';
import { PhaseActiveCell } from './PhaseActiveCell';
import { PhaseCreationCell } from './PhaseCreationCell';
import { PhaseActionsCell } from './PhaseActionsCell';

const columnHelper = createColumnHelper<Phase>();

const phasesColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  // columnHelper.accessor('neighbourhood', {
  //   header: 'State',
  //   cell: (props) => props.getValue(),
  // }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <PhaseActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <PhaseCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <PhaseActionsCell id={props.row.original.id} />,
  }),
];

export { phasesColumns };
