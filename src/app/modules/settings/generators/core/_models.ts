import { ID, Response } from '../../../../../_metronic/helpers';
import { Phase } from '../../phases/core/_models';

export type Generator = {
  id?: ID;
  name: string;
  uid?: string;
  phaseId: ID;
  capacity?: string;
  capacityUOMId?: string;
  engineBrandId?: ID;
  alternativeEngineBrandId?: ID;
  phase?: Phase;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type GeneratorsQueryResponse = Response<Array<Generator>>;

export const initialGenerator: Generator = {
  name: '',
  phaseId: '',
};
