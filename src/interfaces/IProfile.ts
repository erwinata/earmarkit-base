export interface IProfile {
  id: number;
  gender: "male" | "female";
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
  };
}
