// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { Neighbourhood } from '../../../core/_models';
import { NeighbourhoodActiveCell } from './NeighbourhoodActiveCell';
import { NeighbourhoodCreationCell } from './NeighbourhoodCreationCell';
import { NeighbourhoodActionsCell } from './NeighbourhoodActionsCell';

const columnHelper = createColumnHelper<Neighbourhood>();

const neighbourhoodsColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  // columnHelper.accessor('city', {
  //   header: 'City',
  //   cell: (props) => props.getValue(),
  // }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <NeighbourhoodActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <NeighbourhoodCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <NeighbourhoodActionsCell id={props.row.original.id} />,
  }),
];

export { neighbourhoodsColumns };
