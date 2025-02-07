import styles from "./stats-insights-container.module.css";

import { Statistic } from "@/lib/types/statistics";
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
      <h1 className={styles.statisticValue}>
        <span data-target={statistic.value} className="counter">
          {statistic.value}
        </span>
        {statistic.magnitude && `${statistic.magnitude}`}
      </h1>

      <h3
        className={`${styles.statisticDifference} ${
          statistic.differenceAsPercentage ? "" : styles.hidden
        }`}
      >
        <Icon name="arrowUp" size={12} />
        <span
          data-target={statistic.differenceAsPercentage}
          className="counter"
        >
          {statistic.differenceAsPercentage}
        </span>
        {statistic.type !== "Total posts" ? "%" : ""} in 30 days
      </h3>
    </Card>
  );
}
