import axios, { AxiosInstance } from 'axios';
import { isObject } from '../utils/checkers.utils';
import AppConfig from './config';

const api: AxiosInstance = axios.create({
  baseURL: AppConfig.baseURL,
});

type TAxiosData = unknown;

const parseObjectKey = (key: string): string =>
  key.replace(/_+(\w)/g, (str) => {
    const [, s] = str.split('_');

    return s.toUpperCase();
  });

const parseData = (data: TAxiosData): TAxiosData => {
  if (Array.isArray(data)) {
    return data.map((entry) => {
      if (isObject(entry)) return parseData(entry);

      return entry;
    });
  }

  if (typeof data === 'object' && data !== null) {
    return Object.entries(data).reduce((res, [key, value]) => {
      const parsedKey = parseObjectKey(key);

      return {
        ...res,
        [parsedKey]: isObject(value) ? parseData(value) : value,
      };
    }, {});
  }

  return data;
};

api.interceptors.response.use((response) => {
  return {
    ...response,
    data: parseData(response.data),
  };
});

// api.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => ({
//     ...response,
//     data: Object.entries(response.data).reduce((data, [key, value]) => {
//       console.log(key);
//
//       return {
//         ...data,
//         [key]: value,
//       };
//     }),
//   })
// );

export default api;
