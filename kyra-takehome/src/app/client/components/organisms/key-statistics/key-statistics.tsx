import styles from "./key-statistics.module.css";

import RowContainer from "../../atoms/row-container/row-container";
import BubbleContainer from "../../molecules/bubble-container/bubble-container";
import { KeyStatisticsData } from "@/lib/types/key-statistics-data";

interface KeyStatisticsProps {
  statisticsData: KeyStatisticsData[];
}

export default function KeyStatistics({ statisticsData }: KeyStatisticsProps) {
  return (
    <RowContainer className={styles.keyStatisticsSection}>
      {statisticsData.map((statistic) => (
        <BubbleContainer className={styles.keyStatistics} key={statistic.title}>
          <h2> {statistic.title} </h2>
          <h1> ${statistic.value} </h1>
        </BubbleContainer>
      ))}
    </RowContainer>
  );
}
