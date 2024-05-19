import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { Neighbourhoods } from './Neighbourhoods';

const citiesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/neighbourhoods',
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

const NeighbourhoodsPage = () => {
  console.log('neigbourhooods page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='neighbourhoods'
          element={
            <>
              <PageTitle breadcrumbs={citiesBreadcrumbs}>Neighbourhoods</PageTitle>
              <Neighbourhoods />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default NeighbourhoodsPage;
