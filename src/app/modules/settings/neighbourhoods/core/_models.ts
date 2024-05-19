import { ID, Response } from '../../../../../_metronic/helpers';
import { City } from '../../cities/core/_models';

export type Neighbourhood = {
  id?: ID;
  name: string;
  cityId: ID;
  isActive: boolean;
  city?: City;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type NeighbourhoodsQueryResponse = Response<Array<Neighbourhood>>;

export const initialNeighbourhood: Neighbourhood = {
  name: '',
  cityId: '',
  isActive: true,
};
