import {
  formatCreatorInfoData,
  formatTiktokInsightsData,
  formatInstagramInsightsData,
  formatKeyStatisticsData,
  formatChartData,
  formatHeatmapData,
} from "@/lib/formatters/data-objects";

export async function fetchBaseData() {
  try {
    const [baseDataRes, statsHistoryRes] = await Promise.all([
      fetch("/api/base-data"),
      fetch("/api/stats-history"),
    ]);

    if (!baseDataRes.ok || !statsHistoryRes.ok)
      throw new Error("Failed to fetch Kyra data");

    const [baseData, statsHistory] = await Promise.all([
      baseDataRes.json(),
      statsHistoryRes.json(),
    ]);

    const infoData = formatCreatorInfoData(baseData);
    const keyStatisticsData = formatKeyStatisticsData(baseData);
    const tiktokInsightsData = formatTiktokInsightsData(baseData, statsHistory);
    const instagramInsightsData = formatInstagramInsightsData(baseData);
    const statsHistoryData = formatChartData(statsHistory.data);
    const heatmapData = formatHeatmapData(statsHistory.data);

    return {
      infoData,
      keyStatisticsData,
      tiktokInsightsData,
      instagramInsightsData,
      statsHistoryData,
      heatmapData,
    };
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
}
