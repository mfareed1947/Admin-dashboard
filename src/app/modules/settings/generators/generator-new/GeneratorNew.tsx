import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { KTCard } from '../../../../../_metronic/helpers';
import { GeneratorNewForm } from './GeneratorNewForm';
import { initialGenerator } from '../core/_models';
import { getPhases } from '../../phases/core/_requests';
import { getBrands } from '../../brands/core/_requests';

const GeneratorNew = () => {
  console.log('Generator New');

  const phasesQuery = useQuery(
    ['phases'],
    () => {
      return getPhases();
    },
    {
      cacheTime: 0,
      retry: false,
      onError: (error) => {},
    }
  );

  const brandsQuery = useQuery(
    ['brands'],
    () => {
      return getBrands();
    },
    {
      cacheTime: 0,
      retry: false,
      onError: (error) => {},
    }
  );

  if (phasesQuery.isFetching || brandsQuery.isFetching) return <h1>Loading</h1>;

  if (phasesQuery.error || brandsQuery.error) return null;

  return (
    <KTCard>
      {phasesQuery.data && brandsQuery.data && (
        <GeneratorNewForm
          generator={initialGenerator}
          phases={phasesQuery.data}
          brands={brandsQuery.data}
        />
      )}
    </KTCard>
  );
};

export { GeneratorNew };
