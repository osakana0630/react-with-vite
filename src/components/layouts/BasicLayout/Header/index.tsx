import { useLoginUserInfoState } from "../../../providers/LoginUserInfo";
import { memo } from "react";
import { Heading } from "./Heading";
import styles from "./styles.module.css";

export const Header = memo(function HeaderBase() {
  const { value } = useLoginUserInfoState();
  console.log(value);
  return (
    <header className={styles.header}>
      <Heading />
      <button aria-label="メニューを開く" className={styles.openMenu}>
        <span />
      </button>
    </header>
  );
});
