import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { Neighbourhood, NeighbourhoodsQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const NEIGHBOURHOODS_URL = `${API_URL}/neighbourhoods`;

const getNeighbourhoods = (): Promise<Array<Neighbourhood>> => {
  return axios
    .get(`${NEIGHBOURHOODS_URL}`)
    .then((response: AxiosResponse<Array<Neighbourhood>>) => response.data);
};

const findNeighbourhoods = (query: string): Promise<NeighbourhoodsQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${NEIGHBOURHOODS_URL}/find`, q)
    .then((response: AxiosResponse<NeighbourhoodsQueryResponse>) => response.data);
};

const getNeighbourhoodById = (id: ID): Promise<Neighbourhood> => {
  return axios
    .get(`${NEIGHBOURHOODS_URL}/${id}`)
    .then((response: AxiosResponse<Neighbourhood>) => response.data);
};

const createNeighbourhood = (neighbourhood: Neighbourhood): Promise<Neighbourhood> => {
  return axios
    .post(NEIGHBOURHOODS_URL, neighbourhood)
    .then((response: AxiosResponse<Neighbourhood>) => response.data);
};

const updateNeighbourhood = (neighbourhoodId: ID, neighbourhood: Neighbourhood): Promise<void> => {
  return axios.put(`${NEIGHBOURHOODS_URL}/${neighbourhoodId}`, neighbourhood);
};

const deleteNeighbourhood = (neighbourhoodId: ID): Promise<void> => {
  return axios.delete(`${NEIGHBOURHOODS_URL}/${neighbourhoodId}`);
};

export {
  createNeighbourhood,
  getNeighbourhoods,
  findNeighbourhoods,
  getNeighbourhoodById,
  updateNeighbourhood,
  deleteNeighbourhood,
};
