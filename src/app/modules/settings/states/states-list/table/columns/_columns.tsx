// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { State } from '../../../core/_models';
import { StateActiveCell } from './StateActiveCell';
import { StateCreationCell } from './StateCreationCell';
import { StateActionsCell } from './StateActionsCell';

const columnHelper = createColumnHelper<State>();

const statesColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <StateActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <StateCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <StateActionsCell id={props.row.original.id} />,
  }),
];

export { statesColumns };
