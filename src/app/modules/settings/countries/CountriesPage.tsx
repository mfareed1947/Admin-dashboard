import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { Countries } from './Countries';

const countriesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/countries',
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

const CountriesPage = () => {
  console.log('countries page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='countries'
          element={
            <>
              <PageTitle breadcrumbs={countriesBreadcrumbs}>Countries</PageTitle>
              <Countries />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default CountriesPage;
