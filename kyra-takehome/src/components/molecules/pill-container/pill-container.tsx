import styles from "./pill-container.module.css";
import { PillContainerVariant } from "@/lib/types/pill-container";
import { IconName } from "@/lib/types/icons";
import Icon from "@/components/atoms/icon/icon";

interface PillContainerProps {
  iconName: IconName;
  iconSize?: number;
  children: React.ReactNode;
  redirectUrl?: string;
  variant: PillContainerVariant;
  className?: string;
}

export default function PillContainer({
  iconName,
  iconSize,
  children,
  redirectUrl,
  variant,
  className,
}: PillContainerProps) {
  return redirectUrl ? (
    <div
      onClick={() => window.open(redirectUrl, "_blank")}
      className={`${styles.pillContainer} ${styles[variant]} ${className}`}
    >
      <Icon name={iconName} size={iconSize || 24} />
      {children}
      <Icon name="redirect" size={16} />
    </div>
  ) : (
    <div className={`${styles.pillContainer} ${styles[variant]} ${className}`}>
      <Icon name={iconName} size={iconSize || 24} />
      {children}
    </div>
  );
}
