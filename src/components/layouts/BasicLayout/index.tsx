import { LoginUserInfoProvider } from "../../providers/LoginUserInfo";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./styles.module.css";

export const BasicLayoutProviders = ({ children }: { children: ReactNode }) => {
  return <LoginUserInfoProvider>{children}</LoginUserInfoProvider>;
};

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BasicLayoutProviders>
      <div className={styles.root}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </BasicLayoutProviders>
  );
};
