import { apiGetProfiles } from "api/profile";
import Loading from "components/atoms/Loading";
import ProfileItem from "components/molecules/ProfileItem";
import { IProfile } from "interfaces/IProfile";
import React, { useEffect, useState } from "react";

const Profile: React.FC<any> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [profilesData, setProfilesData] = useState<IProfile[]>([]);

  const fetchProfiles = async () => {
    const response = await apiGetProfiles();
    if (response.ok && response.data) {
      setProfilesData(response.data);
    } else {
      //bisa kasih pesan error di sini
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {profilesData.map((item, index) => {
            return <ProfileItem data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
