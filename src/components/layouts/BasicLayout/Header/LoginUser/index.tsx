import { Button } from "../../../../button";
import { User } from "../../../../../types/user.ts";
import styles from "./styles.module.css";

type Props = User;

export const LoginUser = ({ name }: Props) => {
  return (
    <section
      role="region"
      aria-label="ログインユーザー"
      className={styles.user}
    >
      <p className={styles.userName}>{name}</p>
      {/*<p*/}
      {/*  className={styles.thumbnail}*/}
      {/*  style={{ backgroundImage: `url(${imageUrl})` }}*/}
      {/*></p>*/}
      <div className={styles.logout}>
        <div className={styles.logoutInner}>
          <div className={styles.logoutBox}>
            <Button
              theme="transparent"
              variant="small"
              onClick={async () => {
                try {
                  window.location.reload();
                } catch {}
              }}
            >
              ログアウト
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
