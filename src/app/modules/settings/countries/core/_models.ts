import { ID, Response } from '../../../../../_metronic/helpers';

export type Country = {
  id?: ID;
  name: string;
  isActive: boolean;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type CountriesQueryResponse = Response<Array<Country>>;

export const initialCountry: Country = {
  name: '',
  isActive: true,
};
