import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { States } from './States';

const statesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/states',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
];

const StatesPage = () => {
  console.log('states page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='states'
          element={
            <>
              <PageTitle breadcrumbs={statesBreadcrumbs}>States</PageTitle>
              <States />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default StatesPage;
