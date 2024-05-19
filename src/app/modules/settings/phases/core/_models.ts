import { ID, Response } from '../../../../../_metronic/helpers';
import { Neighbourhood } from '../../neighbourhoods/core/_models';

export type Phase = {
  id?: ID;
  name: string;
  neighbourhoodId: ID;
  isActive: boolean;
  neighbourhood?: Neighbourhood;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type PhasesQueryResponse = Response<Array<Phase>>;

export const initialPhase: Phase = {
  name: '',
  neighbourhoodId: '',
  isActive: true,
};
