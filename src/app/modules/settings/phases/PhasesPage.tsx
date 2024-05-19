import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { Phases } from './Phases';

const phasesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/phases',
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

const PhasesPage = () => {
  console.log('phases page');

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='phases'
          element={
            <>
              <PageTitle breadcrumbs={phasesBreadcrumbs}>Phases</PageTitle>
              <Phases />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default PhasesPage;
