"use client";

import "@/app/globals.css";
import styles from "@/app/page.module.css";

import { useEffect, useState } from "react";

import FullScreenSpinner from "@/lib/utils/spinner";
import { CreatorInfoData } from "@/lib/types/creator-info";
import { KeyStatisticsData } from "@/lib/types/key-statistics-data";
import { Statistic } from "@/lib/types/statistic";
import { fetchBaseData } from "@/app/api-lib/utils/fetchBaseData";

import CreatorInfo from "@/app/client/components/organisms/creator-info/creator-info";
import KeyStatistics from "@/app/client/components/organisms/key-statistics/key-statistics";
import HeaderTabs from "@/app/client/components/organisms/header-tabs/header-tabs";
import AccountInfo from "@/app/client/components/organisms/account-info/account-info";

export default function HomePage() {
  const [infoData, setInfoData] = useState<CreatorInfoData | null>(null);
  const [keyStatisticsData, setKeyStatisticsData] = useState<
    KeyStatisticsData[]
  >([]);
  const [insightsData, setInsightsData] = useState<Statistic[]>([]);
  const [statsHistoryData, setStatsHistoryData] = useState(null);
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState("Account info");

  useEffect(() => {
    async function getData() {
      try {
        const { infoData, keyStatisticsData, insightsData, statsHistoryData } =
          await fetchBaseData();

        setInfoData(infoData);
        setKeyStatisticsData(keyStatisticsData);
        setInsightsData(insightsData);

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
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Account info" && (
        <AccountInfo infoData={infoData} insightsData={insightsData} />
      )}
    </div>
  );
}
