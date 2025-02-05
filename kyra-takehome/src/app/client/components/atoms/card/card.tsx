import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  props: any;
}

export default function Card({ children, props }: CardProps) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}
