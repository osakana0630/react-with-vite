import { createContext } from "react";
import { User } from "../../../types/user.ts";

export type LoginUserInfoState = {
  error?: Error;
  loading?: boolean;
  value?: User;
};

export const defaultState: LoginUserInfoState = {
  error: undefined,
  loading: undefined,
  value: undefined,
};

export const LoginUserInfoStateContext =
  createContext<LoginUserInfoState>(defaultState);

export const LoginUserInfoActionContext = createContext({
  updateProfile: {} as () => Promise<User>,
});
