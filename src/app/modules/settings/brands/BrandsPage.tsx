import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { Brands } from './Brands';

const brandsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/brands',
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

const BrandsPage = () => {
  console.log('brands page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='brands'
          element={
            <>
              <PageTitle breadcrumbs={brandsBreadcrumbs}>Brands</PageTitle>
              <Brands />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default BrandsPage;
