import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
};
