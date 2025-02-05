import styles from "./stats-insights-container.module.css";

import { Statistic } from "@/lib/types/statistic";
import Card from "@/app/client/components/atoms/card/card";
import Icon from "@/app/client/components/atoms/icon/icon";

interface StatsInsightsContainerProps {
  statistic: Statistic;
  className?: string;
}

export default function StatsInsightsContainer({
  statistic,
  className,
}: StatsInsightsContainerProps) {
  return (
    <Card className={`${styles.statsInsightsContainer} ${className}`}>
      <h2 className={styles.statisticType}> {statistic.type} </h2>
      <h1 className={styles.statisticValue}> {statistic.value} </h1>

      <h3
        className={`${styles.statisticDifference} ${
          statistic.differenceAsPercentage ? "" : styles.hidden
        }`}
      >
        <Icon name="arrowUp" size={12} />
        {statistic.differenceAsPercentage}
        {statistic.type !== "Total posts" ? "%" : ""} in 30 days
      </h3>
    </Card>
  );
}
