import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { Cities } from './Cities';

const citiesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/cities',
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

const CitiesPage = () => {
  console.log('cities page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='cities'
          element={
            <>
              <PageTitle breadcrumbs={citiesBreadcrumbs}>Cities</PageTitle>
              <Cities />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default CitiesPage;
