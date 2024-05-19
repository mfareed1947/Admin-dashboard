import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { Country, CountriesQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const COUNTRIES_URL = `${API_URL}/countries`;

const getCountries = (): Promise<Array<Country>> => {
  return axios
    .get(`${COUNTRIES_URL}`)
    .then((response: AxiosResponse<Array<Country>>) => response.data);
};

const findCountries = (query: string): Promise<CountriesQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${COUNTRIES_URL}/find`, q)
    .then((response: AxiosResponse<CountriesQueryResponse>) => response.data);
};

const getCountryById = (id: ID): Promise<Country> => {
  return axios
    .get(`${COUNTRIES_URL}/${id}`)
    .then((response: AxiosResponse<Country>) => response.data);
};

const createCountry = (country: Country): Promise<Country> => {
  return axios
    .post(COUNTRIES_URL, country)
    .then((response: AxiosResponse<Country>) => response.data);
};

const updateCountry = (countryId: ID, country: Country): Promise<void> => {
  return axios.put(`${COUNTRIES_URL}/${countryId}`, country);
};

const deleteCountry = (countryId: ID): Promise<void> => {
  return axios.delete(`${COUNTRIES_URL}/${countryId}`);
};

export { createCountry, getCountries, findCountries, getCountryById, updateCountry, deleteCountry };
