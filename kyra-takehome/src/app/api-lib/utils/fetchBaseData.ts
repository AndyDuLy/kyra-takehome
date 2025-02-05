import {
  formatCreatorInfoData,
  formatInsightsData,
  formatKeyStatisticsData,
  formatChartData,
} from "@/lib/formatters/data-objects";

export async function fetchBaseData() {
  try {
    const [res, res2] = await Promise.all([
      fetch("/api/base-data"),
      fetch("/api/stats-history"),
    ]);

    if (!res.ok) throw new Error("Failed to fetch Kyra data");
    if (!res2.ok) throw new Error("Failed to fetch Kyra data");

    const [data, data2] = await Promise.all([res.json(), res2.json()]);

    const infoData = formatCreatorInfoData(data);
    const keyStatisticsData = formatKeyStatisticsData(data);
    const insightsData = formatInsightsData(data, data2);
    const statsHistoryData = formatChartData(data2.data);

    return {
      infoData,
      keyStatisticsData,
      insightsData,
      statsHistoryData,
    };
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
}
