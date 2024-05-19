import axios, { AxiosResponse } from 'axios';
import { ID } from '../../../../../_metronic/helpers';
import { City, CitiesQueryResponse } from './_models';

const API_URL = process.env.REACT_APP_API_URL;
const CITIES_URL = `${API_URL}/cities`;

const getCities = (): Promise<Array<City>> => {
  return axios.get(`${CITIES_URL}`).then((response: AxiosResponse<Array<City>>) => response.data);
};

const findCities = (query: string): Promise<CitiesQueryResponse> => {
  var q = {
    sortField: 'id',
    sortOrder: 'asc',
    pageNumber: 1,
    pageSize: 10,
    isActive: '',
    searchText: '',
  };

  return axios
    .post(`${CITIES_URL}/find`, q)
    .then((response: AxiosResponse<CitiesQueryResponse>) => response.data);
};

const getCityById = (id: ID): Promise<City> => {
  return axios.get(`${CITIES_URL}/${id}`).then((response: AxiosResponse<City>) => response.data);
};

const createCity = (city: City): Promise<City> => {
  return axios.post(CITIES_URL, city).then((response: AxiosResponse<City>) => response.data);
};

const updateCity = (cityId: ID, city: City): Promise<void> => {
  return axios.put(`${CITIES_URL}/${cityId}`, city);
};

const deleteCity = (cityId: ID): Promise<void> => {
  return axios.delete(`${CITIES_URL}/${cityId}`);
};

export { createCity, getCities, findCities, getCityById, updateCity, deleteCity };
