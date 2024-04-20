import { getMe } from "../../../api/user";
import { ReactNode, useEffect } from "react";
import { useAsyncFn } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";

import {
  LoginUserInfoActionContext,
  LoginUserInfoStateContext,
} from "./LoginUserInfoContext";

import { User } from "../../../types/user.ts";

export const LoginUserInfoProvider = ({
  children,
  defaultState,
}: {
  children: ReactNode;
  defaultState?: AsyncState<User>;
}) => {
  const [profile, updateProfile] = useAsyncFn(getMe, [], defaultState);
  useEffect(() => {
    updateProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <LoginUserInfoStateContext.Provider value={profile}>
      <LoginUserInfoActionContext.Provider value={{ updateProfile }}>
        {children}
      </LoginUserInfoActionContext.Provider>
    </LoginUserInfoStateContext.Provider>
  );
};
