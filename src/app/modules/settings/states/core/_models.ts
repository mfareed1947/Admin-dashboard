import { ID, Response } from '../../../../../_metronic/helpers';
import { Country } from '../../countries/core/_models';

export type State = {
  id?: ID;
  name: string;
  countryId: ID;
  country?: Country;
  isActive: boolean;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type StatesQueryResponse = Response<Array<State>>;

export const initialState: State = {
  name: '',
  countryId: '',
  isActive: true,
};
