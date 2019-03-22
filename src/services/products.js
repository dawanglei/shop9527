import { get } from '../utils/request';

export const getProducts = (url) => {
  return get(url, { });
}