/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components';
import { ID, KTSVG } from '../../../../../../../_metronic/helpers';
import { useListView } from '../../../core/ListViewProvider';
import { useQueryResponse } from '../../../core/QueryResponseProvider';
import { deleteState } from '../../../core/_requests';

type Props = {
  id: ID;
};

const StateActionsCell: FC<Props> = ({ id }) => {
  const { setItemIdForUpdate } = useListView();
  const { query } = useQueryResponse();
  const queryClient = useQueryClient();

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);

  const openEditModal = () => {
    setItemIdForUpdate(id);
  };

  const deleteItem = useMutation(() => deleteState(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries(['states', query]);
    },
  });

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Edit
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-states-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  );
};

export { StateActionsCell };
