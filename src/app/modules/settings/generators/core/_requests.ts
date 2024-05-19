import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { Generator, GeneratorsQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const GENERATORS_URL = `${API_URL}/generators`;

const getGenerators = (): Promise<Array<Generator>> => {
  return axios
    .get(`${GENERATORS_URL}`)
    .then((response: AxiosResponse<Array<Generator>>) => response.data);
};

const findGenerators = (query: string): Promise<GeneratorsQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${GENERATORS_URL}/find`, q)
    .then((response: AxiosResponse<GeneratorsQueryResponse>) => response.data);
};

const getGeneratorById = (id: ID): Promise<Generator> => {
  return axios
    .get(`${GENERATORS_URL}/${id}`)
    .then((response: AxiosResponse<Generator>) => response.data);
};

const createGenerator = (generator: Generator): Promise<Generator> => {
  return axios
    .post(GENERATORS_URL, generator)
    .then((response: AxiosResponse<Generator>) => response.data);
};

const updateGenerator = (generatorId: ID, generator: Generator): Promise<void> => {
  return axios.put(`${GENERATORS_URL}/${generatorId}`, generator);
};

const deleteGenerator = (generatorId: ID): Promise<void> => {
  return axios.delete(`${GENERATORS_URL}/${generatorId}`);
};

export {
  createGenerator,
  getGenerators,
  findGenerators,
  getGeneratorById,
  updateGenerator,
  deleteGenerator,
};
