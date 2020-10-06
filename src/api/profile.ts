import { baseAPIURLRandomUser } from "api/baseAPIURL";
import Axios from "axios";
import { IProfile } from "interfaces/IProfile";

export const apiGetProfiles = async () => {
  let url = baseAPIURLRandomUser;
  url += "?results=10&seed=tes";

  const response = await Axios.get(url);

  if (response.status === 200) {
    const profileArrayFromAPI = response.data.results;
    const resultProfiles: IProfile[] = [];

    profileArrayFromAPI.map((item: any, index: number) => {
      resultProfiles.push({
        id: index,
        gender: item.gender,
        name: {
          first: item.name.first,
          last: item.name.last,
        },
        email: item.email,
        picture: {
          large: item.picture.large,
          medium: item.picture.medium,
        },
      });
    });

    return {
      ok: true,
      data: resultProfiles,
    };
  } else {
    return {
      ok: false,
    };
  }
};

export const apiGetProfileDetail = async (id: number) => {
  //seharusnya url di sini langsung tembak id nya user
  let url = baseAPIURLRandomUser;
  url += "?results=10&seed=tes";

  const response = await Axios.get(url);

  if (response.status === 200) {
    const profileArrayFromAPI = response.data.results;
    const rawProfile = profileArrayFromAPI[id];

    const resultProfile: IProfile = {
      id: id,
      gender: rawProfile.gender,
      name: {
        first: rawProfile.name.first,
        last: rawProfile.name.last,
      },
      email: rawProfile.email,
      picture: {
        large: rawProfile.picture.large,
        medium: rawProfile.picture.medium,
      },
    };

    return {
      ok: true,
      data: resultProfile,
    };
  } else {
    return {
      ok: false,
    };
  }
};
