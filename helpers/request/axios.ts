import axios from "axios";

type ReqTypes = {
  method: string,
  url: string,
}
const BASE = "https://jsonplaceholder.typicode.com"
const axiosReq = ({ method = "GET", url, ...props }: ReqTypes) => axios({
  method,
  url: `${BASE}${url}`,
  headers: { "Content-Type": "application/json" },
  ...props
}).then((res) => res.data)
  .catch((err) => err)

export default axiosReq