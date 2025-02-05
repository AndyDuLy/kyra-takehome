import styles from "./insights-container.module.css";

import { Statistic } from "@/lib/types/statistic";
import Card from "@/app/client/components/atoms/card/card";
import Icon from "@/app/client/components/atoms/icon/icon";
import RowContainer from "@/app/client/components/atoms/row-container/row-container";
import StatsInsightsContainer from "@/app/client/components/molecules/stats-insights-container/stats-insights-container";

interface InsightsContainerProps {
  statistics: Statistic[];
}

export default function InsightsContainer({
  statistics,
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
          {statistics.map((statistic, id) => (
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
          {statistics.map((statistic, id) => (
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
