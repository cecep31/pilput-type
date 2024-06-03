import axios from "axios";
import { apibaseurl, apibaseurl2 } from './getConfig'

export const axiosIntence = axios.create({
  baseURL: apibaseurl,
});
export const axiosIntence2 = axios.create({
  baseURL: apibaseurl2,
});

