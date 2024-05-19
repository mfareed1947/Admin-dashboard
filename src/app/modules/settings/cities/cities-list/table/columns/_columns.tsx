// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { City } from '../../../core/_models';
import { CityActiveCell } from './CityActiveCell';
import { CityCreationCell } from './CityCreationCell';
import { CityActionsCell } from './CityActionsCell';

const columnHelper = createColumnHelper<City>();

const citiesColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  // columnHelper.accessor('state', {
  //   header: 'State',
  //   cell: (props) => props.getValue(),
  // }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <CityActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <CityCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <CityActionsCell id={props.row.original.id} />,
  }),
];

export { citiesColumns };
