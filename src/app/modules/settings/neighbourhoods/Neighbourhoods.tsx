import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { ListViewProvider } from './core/ListViewProvider';
import { NeighbourhoodsList } from './neighbourhoods-list/NeighbourhoodsList';

const Neighbourhoods = () => {
  console.log('neighbourhoods');

  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <NeighbourhoodsList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { Neighbourhoods };
