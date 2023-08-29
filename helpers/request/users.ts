import axios from "./axios";

export const getUsers = () => axios({
  method: 'GET',
  url: '/users'
})