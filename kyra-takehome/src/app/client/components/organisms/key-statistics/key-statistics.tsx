import styles from "./key-statistics.module.css";

import { useEffect } from "react";

import RowContainer from "@/app/client/components/atoms/row-container/row-container";
import BubbleContainer from "@/app/client/components/molecules/bubble-container/bubble-container";
import { KeyStatisticsData } from "@/lib/types/statistics";
import { startCounting } from "@/lib/utils/counting-animation";

interface KeyStatisticsProps {
  statisticsData: KeyStatisticsData[];
}

export default function KeyStatistics({ statisticsData }: KeyStatisticsProps) {
  useEffect(() => {
    startCounting();
  }, []);

  return (
    <RowContainer className={styles.keyStatisticsSection}>
      {statisticsData.map((statistic) => (
        <BubbleContainer className={styles.keyStatistics} key={statistic.title}>
          <h2> {statistic.title} </h2>
          <h1 className="counter" data-target={statistic.value}>
            {`${statistic.value}`}
          </h1>
        </BubbleContainer>
      ))}
    </RowContainer>
  );
}
