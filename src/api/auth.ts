import { baseAPIURL } from "./baseAPIURL";

//di sini api nya buatan semua, kalo mau lihat api yang work bisa cek di file api/profile.ts

export const apiLogin = async (email: string, password: string) => {
  let url = baseAPIURL;
  url += "login"; //contoh api path

  // const response = await Axios.post(url, {
  //   email: email,
  //   password: password,
  // }); //kirim request POST untuk kirim tasknya, tpi untuk contoh kita bikin response buatan

  //cek email dan password harusnya kita kirim request ke server dan proses returnnya
  //tpi ini contoh aja biar ada sampel buat handle return berhasil login dan tidak

  let responseBuatan: any;

  if (email === "tes@gmail.com" && password === "tes") {
    responseBuatan = {
      status: 200,
      data: {
        user: {
          name: "Budi Surya",
          email: "tes@gmail.com",
        },
        //ini token oauth yang direturn dari server
        //tokennya ini akan dipake terus setiap ngirim data ke server sbg bukti klo user ini telah login
        token: "sampletokenabcd",
      },
    };
  } else {
    responseBuatan = {
      status: 401,
    };
  }

  if (responseBuatan.status === 200) {
    const responseUser = responseBuatan.data.user;

    return {
      ok: true,
      data: {
        user: {
          name: responseUser.name,
          email: responseUser.email,
        },
        token: responseBuatan.data.token,
      },
    };
  } else {
    return {
      ok: false,
    };
  }
};

export const apiLogout = async () => {
  //seharusnya kirim request logout ke server dulu, baru return ok true
  if (true) {
    return {
      ok: true,
    };
  }

  //return ini kalo dari server return false
  return {
    ok: false,
  };
};

export const apiGetUser = async (token: string) => {
  //ini fungsi buat dapetin detail user menggunakan token
  //seharusnya buat request ke server, lalu cek di server, dan responsenya detail user

  //sbg contoh ini pengecekannya di frontend
  if (token === "sampletokenabcd") {
    return {
      ok: true,
      data: {
        user: {
          name: "Budi Surya",
          email: "tes@gmail.com",
        },
      },
    };
  }

  return {
    ok: false,
  };
};
