import styles from "./row-container.module.css";

interface RowContainerProps {
  children: React.ReactNode;
  props?: any;
}

export default function RowContainer({ children, props }: RowContainerProps) {
  return (
    <div className={styles.rowContainer} {...props}>
      {children}
    </div>
  );
}
