import axios from 'axios'

export function apiConnector() {
  let baseUrl;
  if (process.env["NODE_ENV"] == 'development') {
    baseUrl = "http://localhost:3031";
  } else {
    baseUrl = "https://api.umaster.xyz";
  }

  return axios.create({
    baseUrl
  });
}
