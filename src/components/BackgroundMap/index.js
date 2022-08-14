import React from "react";
import BackgroundSvg from "/static/map.svg";
import styles from "./styles.module.css";

export default function BackgroundMap() {
  return (
    <div>
      <BackgroundSvg className={styles.backgroundSvg} />
    </div>
  );
}
