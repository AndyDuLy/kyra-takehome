import styles from "./insights-container.module.css";

import { Statistic } from "@/lib/types/statistics";
import Card from "@/components/atoms/card/card";
import Icon from "@/components/atoms/icon/icon";
import RowContainer from "@/components/atoms/row-container/row-container";
import StatsInsightsContainer from "@/components/molecules/stats-insights-container/stats-insights-container";

interface InsightsContainerProps {
  tiktokStatistics: Statistic[];
  instagramStatistics: Statistic[];
}

export default function InsightsContainer({
  tiktokStatistics,
  instagramStatistics,
}: InsightsContainerProps) {
  return (
    <>
      <Card
        className={`${styles.accountInfoStatsCard} ${styles.tiktokContainer}`}
      >
        <Card className={styles.accountInfoStatsCardIcon}>
          <Icon name="tiktok" size={36} />
        </Card>

        <RowContainer className={styles.accountInfoStatsSection}>
          {tiktokStatistics.map((statistic, id) => (
            <StatsInsightsContainer
              key={id}
              className={styles.element}
              statistic={statistic}
            />
          ))}
        </RowContainer>
      </Card>

      <Card
        className={`${styles.accountInfoStatsCard} ${styles.instagramContainer}`}
      >
        <Card className={styles.accountInfoStatsCardIcon}>
          <Icon name="instagram" size={36} />
        </Card>

        <RowContainer className={styles.accountInfoStatsSection}>
          {instagramStatistics.map((statistic, id) => (
            <StatsInsightsContainer
              key={id}
              className={styles.element}
              statistic={statistic}
            />
          ))}
        </RowContainer>
      </Card>
    </>
  );
}
