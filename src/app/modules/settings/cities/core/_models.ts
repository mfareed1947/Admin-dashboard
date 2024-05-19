import { ID, Response } from '../../../../../_metronic/helpers';
import { State } from '../../states/core/_models';

export type City = {
  id?: ID;
  name: string;
  stateId: ID;
  isActive?: boolean;
  state?: State;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type CitiesQueryResponse = Response<Array<City>>;

export const initialCity: City = {
  name: '',
  stateId: '',
  isActive: true,
};
