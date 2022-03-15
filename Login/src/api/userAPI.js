import axiosClient from "./axiosClient";
const userApi = {
  login(data) {
    const url = "/api/v0/login";
    return axiosClient.post(url, data);
  },
  getAll(params) {
    const url = "/api/v0/workspaces";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/v0/workspaces/${id}/select`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/api/v0/workspaces";
    return axiosClient.post(url, data);
  },
};
export default userApi;
