import styles from "./pill-container.module.css";
import { PillContainerVariant } from "@/lib/types/pill-container-variants";
import { IconName } from "@/lib/types/icon-types";
import Icon from "@/app/client/components/atoms/icon/icon";

interface PillContainerProps {
  iconName: IconName;
  children: React.ReactNode;
  redirectUrl?: string;
  variant: PillContainerVariant;
  className?: string;
}

export default function PillContainer({
  iconName,
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
      <Icon name={iconName} />
      {children}
      <Icon name="redirect" size={16} />
    </div>
  ) : (
    <div className={`${styles.pillContainer} ${styles[variant]} ${className}`}>
      <Icon name={iconName} />
      {children}
    </div>
  );
}
