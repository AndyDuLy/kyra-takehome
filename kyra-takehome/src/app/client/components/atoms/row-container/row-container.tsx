import styles from "./row-container.module.css";

interface RowContainerProps {
  children: React.ReactNode;
}

export default function RowContainer({ children }: RowContainerProps) {
  return <div className={styles.rowContainer}>{children}</div>;
}
