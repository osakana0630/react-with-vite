import Pen from "./assets/Pen.svg";
import styles from "./styles.module.css";

export const Heading = () => {
  return (
    <h1 className={styles.heading}>
      <a href={`/`}>
        <span className={styles.icon}>
          <Pen />
        </span>
        Tech Posts
      </a>
    </h1>
  );
};
