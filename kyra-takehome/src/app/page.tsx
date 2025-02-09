"use client";

import "@/app/globals.css";
import styles from "@/app/page.module.css";

import { useEffect, useState } from "react";

import FullScreenSpinner from "@/lib/utils/spinner";
import { CreatorInfoData } from "@/lib/types/creator-info";
import { KeyStatisticsData, Statistic } from "@/lib/types/statistics";
import { DataPoint, HeatmapData } from "@/lib/types/charts";

import { fetchBaseData } from "@/app/api-lib/utils/fetchBaseData";
import CreatorInfo from "@/components/organisms/creator-info/creator-info";
import KeyStatistics from "@/components/organisms/key-statistics/key-statistics";
import HeaderTabs from "@/components/organisms/header-tabs/header-tabs";
import AccountInfo from "@/components/organisms/account-info/account-info";
import Chart from "@/components/organisms/chart/chart";
import PostingHeatmap from "@/components/organisms/posting-heatmap/posting-heatmap";

export default function HomePage() {
  const [infoData, setInfoData] = useState<CreatorInfoData | null>(null);
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  const [heatmapData, setHeatmapData] = useState<HeatmapData | null>(null);
  const [keyStatisticsData, setKeyStatisticsData] = useState<
    KeyStatisticsData[]
  >([]);
  const [tiktokInsightsData, setTiktokInsightsData] = useState<Statistic[]>([]);
  const [instagramInsightsData, setInstagramInsightsData] = useState<
    Statistic[]
  >([]);
  const [error, setError] = useState("");

  const [activeTab, setActiveTab] = useState("Account info");

  useEffect(() => {
    async function getData() {
      try {
        const {
          infoData,
          keyStatisticsData,
          tiktokInsightsData,
          instagramInsightsData,
          statsHistoryData,
          heatmapData,
        } = await fetchBaseData();

        setInfoData(infoData);
        setKeyStatisticsData(keyStatisticsData);
        setTiktokInsightsData(tiktokInsightsData);
        setInstagramInsightsData(instagramInsightsData);
        setChartData(statsHistoryData);
        setHeatmapData(heatmapData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );

        return error;
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
        <>
          <AccountInfo
            infoData={infoData}
            tiktokInsightsData={tiktokInsightsData}
            instagramInsightsData={instagramInsightsData}
          />

          <Chart chartData={chartData} />
          {heatmapData && <PostingHeatmap data={heatmapData} />}
        </>
      )}

      {activeTab !== "Account info" && (
        <h1> Oops! This tab doesn't exist yet. </h1>
      )}
    </div>
  );
}
