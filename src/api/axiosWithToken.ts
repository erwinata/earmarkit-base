import Axios from "axios";
import { localClearToken, localLoadToken, localSaveToken } from "local/token";
import { get } from "lodash";

//ini request axios tapi kita upgrade dengan masang token di header buat otentifikasi user di server
//ditambah fitur auto refresh token kalo misal sudah expired token yang dipakai
//lalu otomatis logout jika token sudah ga valid

export const axiosWithToken = (options = {}) => {
  const token = localLoadToken();
  const config = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
  const instance = Axios.create(config);

  instance.interceptors.response.use(
    function (response) {
      let newtoken = get(response, "headers.authorization");
      if (newtoken) {
        localSaveToken(newtoken);
        console.log("Token telah direfresh");
      }
      return response;
    },
    function (error) {
      switch (error.response?.status) {
        case 401:
          localClearToken();
          console.log("Token expired, otomatis logout");
          window.location.href = "/login";
          break;
        default:
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
