import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { State, StatesQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const STATES_URL = `${API_URL}/states`;

const getStates = (): Promise<Array<State>> => {
  return axios.get(`${STATES_URL}`).then((response: AxiosResponse<Array<State>>) => response.data);
};

const findStates = (query: string): Promise<StatesQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${STATES_URL}/find`, q)
    .then((response: AxiosResponse<StatesQueryResponse>) => response.data);
};

const getStateById = (id: ID): Promise<State> => {
  return axios.get(`${STATES_URL}/${id}`).then((response: AxiosResponse<State>) => response.data);
};

const createState = (state: State): Promise<State> => {
  return axios.post(STATES_URL, state).then((response: AxiosResponse<State>) => response.data);
};

const updateState = (stateId: ID, state: State): Promise<void> => {
  return axios.put(`${STATES_URL}/${stateId}`, state);
};

const deleteState = (stateId: ID): Promise<void> => {
  return axios.delete(`${STATES_URL}/${stateId}`);
};

export { createState, getStates, findStates, getStateById, updateState, deleteState };
