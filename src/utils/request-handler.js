import axios from "axios";
import qs from "qs";
import { store } from 'index'
import * as CONSTANT from 'constant'

export const requestHandler = ({options, cb, failCb}) => {
  console.log('----', process)
  let axiosOptions = {
    url: 'https://stat.ebash.team/api/' + options.url,
    method: options.type,
    headers: {
      "Content-Type": "application/json",
    }
  };
  switch (options.type.toLowerCase()) {
    case "get":
      if (options.data) {
        axiosOptions.url += "?" + qs.stringify(options.data);
      }
      break;
    case "put":
    case "post":
    case "delete":
      axiosOptions.data = options.data || {};
      break;
    default:
      break;
  }
  store.dispatch({ type: CONSTANT.LOADER, payload: true })
  return axios(axiosOptions)
    .then(res => {
      if (typeof cb === 'function') cb(res)
      store.dispatch({ type: CONSTANT.LOADER, payload: false })
    })
    .catch(function (err) {
      console.log(err.response)
      store.dispatch({ type: CONSTANT.LOADER, payload: false })
    })
};