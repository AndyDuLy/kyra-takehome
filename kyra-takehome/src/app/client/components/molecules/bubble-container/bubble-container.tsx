import styles from "./bubble-container.module.css";
import Card from "@/app/client/components/atoms/card/card";

interface BubbleContainerProps {
  children: React.ReactNode;
  props?: any;
}

export default function BubbleContainer({
  children,
  props,
}: BubbleContainerProps) {
  return (
    <Card props={{ className: styles.bubbleContainer, ...props }}>
      {children}
    </Card>
  );
}
