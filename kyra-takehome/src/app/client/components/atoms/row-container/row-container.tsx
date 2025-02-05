import styles from "./row-container.module.css";

interface RowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function RowContainer({
  children,
  className = "",
}: RowContainerProps) {
  return (
    <div className={`${styles.rowContainer} ${className}`}>{children}</div>
  );
}
