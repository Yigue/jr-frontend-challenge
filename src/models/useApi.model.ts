import { AxiosResponse } from "axios";

export default interface UseApiCall {
  call: Promise<AxiosResponse>,
  controller: AbortController
}