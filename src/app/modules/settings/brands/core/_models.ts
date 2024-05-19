import { ID, Response } from '../../../../../_metronic/helpers';

export type Brand = {
  id?: ID;
  name: string;
  brandTypeId: ID;
  type?: BrandType;
  isActive?: boolean;
  createdBy?: string;
  createdAt?: string;
  modifiedBy?: string;
  modifiedAt?: string;
};

export type BrandsQueryResponse = Response<Array<Brand>>;

export const initialBrand: Brand = {
  name: '',
  brandTypeId: '',
  isActive: true,
};

export type BrandType = {
  id: ID;
  name: string;
};

export const BrandTypes: Array<BrandType> = [
  {
    id: 1,
    name: 'Main',
  },
  {
    id: 2,
    name: 'Alternative',
  },
];
