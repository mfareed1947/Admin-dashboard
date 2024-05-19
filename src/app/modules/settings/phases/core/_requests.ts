import axios, { AxiosResponse } from 'axios';
import { ID, Response } from '../../../../../_metronic/helpers';
import { Phase, PhasesQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const PHASES_URL = `${API_URL}/phases`;

const getPhases = (): Promise<Array<Phase>> => {
  return axios.get(`${PHASES_URL}`).then((response: AxiosResponse<Array<Phase>>) => response.data);
};

const findPhases = (query: string): Promise<PhasesQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${PHASES_URL}/find`, q)
    .then((response: AxiosResponse<PhasesQueryResponse>) => response.data);
};

const getPhaseById = (id: ID): Promise<Phase> => {
  return axios.get(`${PHASES_URL}/${id}`).then((response: AxiosResponse<Phase>) => response.data);
};

const createPhase = (phase: Phase): Promise<Phase> => {
  return axios.post(PHASES_URL, phase).then((response: AxiosResponse<Phase>) => response.data);
};

const updatePhase = (phaseId: ID, phase: Phase): Promise<void> => {
  return axios.put(`${PHASES_URL}/${phaseId}`, phase);
};

const deletePhase = (phaseId: ID): Promise<void> => {
  return axios.delete(`${PHASES_URL}/${phaseId}`);
};

export { createPhase, getPhases, findPhases, getPhaseById, updatePhase, deletePhase };
