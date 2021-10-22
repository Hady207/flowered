import { api } from "../api";

export const getHomeData = () => api.get(`all`);
