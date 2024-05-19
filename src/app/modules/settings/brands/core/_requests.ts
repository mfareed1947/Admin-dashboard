import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { Brand, BrandsQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const BRANDS_URL = `${API_URL}/brands`;

const getBrands = (): Promise<Array<Brand>> => {
  return axios.get(`${BRANDS_URL}`).then((response: AxiosResponse<Array<Brand>>) => response.data);
};

const findBrands = (query: string): Promise<BrandsQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${BRANDS_URL}/find`, q)
    .then((response: AxiosResponse<BrandsQueryResponse>) => response.data);
};

const getBrandById = (id: ID): Promise<Brand> => {
  return axios.get(`${BRANDS_URL}/${id}`).then((response: AxiosResponse<Brand>) => response.data);
};

const createBrand = (brand: Brand): Promise<Brand> => {
  return axios.post(BRANDS_URL, brand).then((response: AxiosResponse<Brand>) => response.data);
};

const updateBrand = (brandId: ID, brand: Brand): Promise<void> => {
  return axios.put(`${BRANDS_URL}/${brandId}`, brand);
};

const deleteBrand = (brandId: ID): Promise<void> => {
  return axios.delete(`${BRANDS_URL}/${brandId}`);
};

export { createBrand, getBrands, findBrands, getBrandById, updateBrand, deleteBrand };
