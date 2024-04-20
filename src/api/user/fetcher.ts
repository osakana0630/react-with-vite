import { defaultHeaders, handleResolve, host } from "..";
import { User } from "../../types/user.ts";

export const path = () => host(`/users/1`);

export async function getMe(): Promise<User> {
  return fetch(path(), {
    headers: defaultHeaders,
  }).then(handleResolve);
}
