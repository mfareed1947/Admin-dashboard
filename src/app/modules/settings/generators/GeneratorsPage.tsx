import { Route, Routes, Outlet } from 'react-router-dom';
import { PageLink, PageTitle } from '../../../../_metronic/layout/core';
import { GeneratorsList } from './generators-list/GeneratorsList';
import { GeneratorNew } from './generator-new/GeneratorNew';
import { GeneratorEdit } from './generator-edit/GeneratorEdit';
import { GeneratorProfile } from './generator-profile/GeneratorProfile';
import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { ListViewProvider } from './core/ListViewProvider';

const generatorsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings/generators',
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

const GeneratorsPage = () => {
  console.log('Generators Page');

  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <Routes>
            <Route element={<Outlet />}>
              <Route
                path='generators'
                element={
                  <>
                    <PageTitle breadcrumbs={generatorsBreadcrumbs}>Generators</PageTitle>
                    <GeneratorsList />
                  </>
                }
              />
              <Route
                path='generators/new'
                element={
                  <>
                    <PageTitle breadcrumbs={generatorsBreadcrumbs}>Generators New</PageTitle>
                    <GeneratorNew />
                  </>
                }
              />
              <Route
                path='generators/:id/edit'
                element={
                  <>
                    <PageTitle breadcrumbs={generatorsBreadcrumbs}>Generators Edit</PageTitle>
                    <GeneratorEdit />
                  </>
                }
              />
              <Route
                path='generators/:id/profile'
                element={
                  <>
                    <PageTitle breadcrumbs={generatorsBreadcrumbs}>Generators Profile</PageTitle>
                    <GeneratorProfile />
                  </>
                }
              />
            </Route>
          </Routes>
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export default GeneratorsPage;
