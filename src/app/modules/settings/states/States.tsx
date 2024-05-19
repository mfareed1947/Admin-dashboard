import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { ListViewProvider } from './core/ListViewProvider';
import { StatesList } from './states-list/StatesList';

const States = () => {
  console.log('states');

  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <StatesList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { States };
