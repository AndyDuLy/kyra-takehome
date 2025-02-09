import styles from "./bubble-container.module.css";
import Card from "@/components/atoms/card/card";

interface BubbleContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BubbleContainer({
  children,
  className = "",
}: BubbleContainerProps) {
  return (
    <Card className={`${styles.bubbleContainer} ${className}`}>{children}</Card>
  );
}
