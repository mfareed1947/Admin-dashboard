import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { ListViewProvider } from './core/ListViewProvider';
import { CountriesList } from './countries-list/CountriesList';

const Countries = () => {
  console.log('countries');

  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <CountriesList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { Countries };
