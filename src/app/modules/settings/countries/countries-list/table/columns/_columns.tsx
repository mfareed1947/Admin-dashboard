// @ts-nocheck
import { createColumnHelper } from '@tanstack/react-table';
import { Country } from '../../../core/_models';
import { CountryActiveCell } from './CountryActiveCell';
import { CountryCreationCell } from './CountryCreationCell';
import { CountryActionsCell } from './CountryActionsCell';

const columnHelper = createColumnHelper<Country>();

const countriesColumns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor('isActive', {
    header: 'Active',
    cell: (props) => <CountryActiveCell isActive={props.getValue()} />,
  }),
  columnHelper.accessor((row) => ({ createdBy: row.createdBy, createdAt: row.createdAt }), {
    header: 'Creation',
    cell: (props) => {
      const { createdBy, createdAt } = props.getValue();
      return <CountryCreationCell createdBy={createdBy} createdAt={createdAt} />;
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: (props) => <CountryActionsCell id={props.row.original.id} />,
  }),
];

export { countriesColumns };
