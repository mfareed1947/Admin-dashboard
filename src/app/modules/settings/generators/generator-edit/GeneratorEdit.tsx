import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isNotEmpty, KTCard } from '../../../../../_metronic/helpers';
import { GeneratorEditForm } from './GeneratorEditForm';
import { getPhases } from '../../phases/core/_requests';
import { getBrands } from '../../brands/core/_requests';
import { getGeneratorById } from '../core/_requests';

const GeneratorEdit = () => {
  const { id } = useParams();
  const enabledQuery: boolean = isNotEmpty(id);

  const generatorQuery = useQuery(
    ['generator', id],
    () => {
      return getGeneratorById(id);
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      retry: false,
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          if (!error?.response) {
            alert('No Server Response');
          } else if (error.response?.status === 400) {
            alert('Missing Username or Password');
          } else if (error.response?.status === 401) {
            alert('Unauthorized');
          } else if (error.response?.status === 404) {
            alert('Not Found');
          } else {
            alert('Login Failed');
          }
        }
      },
    }
  );

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

  if (generatorQuery.isFetching || phasesQuery.isFetching || brandsQuery.isFetching)
    return <h1>Loading</h1>;

  if (generatorQuery.isFetching || phasesQuery.error || brandsQuery.error) return null;

  return (
    <KTCard>
      {generatorQuery.data && phasesQuery.data && brandsQuery.data && (
        <GeneratorEditForm
          generator={generatorQuery.data}
          phases={phasesQuery.data}
          brands={brandsQuery.data}
        />
      )}
    </KTCard>
  );
};

export { GeneratorEdit };
