import Avatar from "components/atoms/Avatar";
import Button from "components/atoms/Button";
import { IProfile } from "interfaces/IProfile";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data: IProfile;
}

const ProfileItem: React.FC<Props> = (props) => {
  return (
    <div className="w-1/2 md:w-1/3 px-2 py-2">
      <div className="flex px-3 py-4 bg-level-1 border border-muted rounded space-x-4">
        <Avatar src={props.data.picture.medium} />
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl">
            {props.data.name.first} {props.data.name.last}
          </h1>
          <Link to={`/profile/${props.data.id}`}>
            <Button size="sm">Buka detail</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProfileItem;
