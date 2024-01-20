import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string;
  username: string;
  roles: JsonValue;
  name: string | null;
};
