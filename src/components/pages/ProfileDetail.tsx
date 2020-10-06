import { apiGetProfileDetail } from "api/profile";
import Avatar from "components/atoms/Avatar";
import Loading from "components/atoms/Loading";
import { IProfile } from "interfaces/IProfile";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

interface RouteParams {
  id?: string;
}

const ProfileDetail: React.FC<any> = (props) => {
  const [profileID, setProfileID] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<IProfile>();

  const { id } = useParams<RouteParams>();
  useEffect(() => {
    if (id) {
      setProfileID(parseInt(id));
    }
  }, [id]);

  const fetchDetailProfile = async () => {
    const response = await apiGetProfileDetail(profileID);
    if (response.ok && response.data) {
      setProfileData(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (profileID !== -1) {
      fetchDetailProfile();
    }
  }, [profileID]);

  return (
    <div>
      <div className="flex flex-col items-center py-20">
        {isLoading || !profileData ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center px-3 py-4 bg-level-1 border border-muted rounded space-y-4 shadow-2xl">
            <h1 className="text-xl font-semibold">Detail Profil</h1>
            <div>
              <Avatar src={profileData.picture.large} size="x2l" />
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-xl font-semibold">
                {profileData.name.first} {profileData.name.last}
              </h1>
              <h1 className="text-xl text-blue-600">{profileData.gender}</h1>
              <h1 className="text-lg">{profileData.email}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;
