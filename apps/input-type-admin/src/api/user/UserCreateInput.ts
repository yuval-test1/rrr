import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName: string;
  username: string;
  password: string;
  roles: InputJsonValue;
  name?: string | null;
};
