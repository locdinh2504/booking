import AxiosService from "./../AxiosService/index";
import { API_URL } from "./../constants/index";

const url = "task";

export const fetchListData = () => {
  return AxiosService.get(`${API_URL}/${url}`);
};

export const addtaskData = (data) => {
  return AxiosService.post(`${API_URL}/${url}`, data);
};

export const deleteData = (id) => {
  return AxiosService.delete(`${API_URL}/${url}/${id}`);
};

export const updateData = (data, id) => {
  return AxiosService.put(`${API_URL}/${url}/${id}`, data);
};
