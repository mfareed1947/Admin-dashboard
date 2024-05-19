import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { ListViewProvider } from './core/ListViewProvider';
import { CitiesList } from './cities-list/CitiesList';

const Cities = () => {
  console.log('cities');

  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <CitiesList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { Cities };
