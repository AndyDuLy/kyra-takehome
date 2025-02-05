"use client";

import "@/app/globals.css";
import styles from "@/app/page.module.css";

import FullScreenSpinner from "@/lib/utils/spinner";
import { CreatorInfoData } from "@/lib/types/creator-info";
import { KeyStatisticsData } from "@/lib/types/key-statistics-data";
import { fetchBaseData } from "@/app/api-lib/utils/fetchBaseData";

import CreatorInfo from "@/app/client/components/organisms/creator-info/creator-info";
import KeyStatistics from "@/app/client/components/organisms/key-statistics/key-statistics";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [infoData, setInfoData] = useState<CreatorInfoData | null>(null);
  const [keyStatisticsData, setKeyStatisticsData] = useState<
    KeyStatisticsData[]
  >([]);
  const [statsHistoryData, setStatsHistoryData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const { infoData, keyStatisticsData, statsHistoryData } =
          await fetchBaseData();

        setInfoData(infoData);
        setKeyStatisticsData(keyStatisticsData);

        setStatsHistoryData(statsHistoryData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    }

    getData();
  }, []);

  if (!infoData) return <FullScreenSpinner />;

  return (
    <div className={styles.container}>
      <CreatorInfo alt={infoData.name} infoData={infoData} />
      <KeyStatistics statisticsData={keyStatisticsData} />
    </div>
  );
}
