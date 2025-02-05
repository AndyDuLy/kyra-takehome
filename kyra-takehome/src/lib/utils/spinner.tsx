import React from "react";
import styles from "./spinner.module.css";

const FullScreenSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinner}></div>
      <p className={styles.spinnerText}> Loading Creator Data...</p>
    </div>
  );
};

export default FullScreenSpinner;
