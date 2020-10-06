import { apiLogout } from "api/auth";
import Button from "components/atoms/Button";
import Overlay from "components/molecules/Overlay";
import { IUser } from "interfaces/IUser";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ICombinedState } from "redux/store";

interface Props {
  closePopup: () => void;
}

interface ReduxState {
  user?: IUser;
}

const UserPopup: React.FC<Props> = (props) => {
  const history = useHistory();

  const { user } = useSelector<ICombinedState, ReduxState>((state) => {
    return {
      user: state.app.user,
    };
  });

  const handle = {
    onLogout: async () => {
      const response = await apiLogout();

      if (response.ok) {
        history.push("/login");
      }
    },
  };

  return (
    <Overlay onClick={props.closePopup}>
      <div className="fixed top-0 right-0 mt-16 mr-5 bg-level-1 rounded shadow-2xl text-normal px-4 py-4">
        <div className="flex flex-col space-y-3">
          <h1>{user?.name}</h1>
          <h1>{user?.email}</h1>
          <Button color="danger" onClick={handle.onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </Overlay>
  );
};

export default UserPopup;
