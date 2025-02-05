import { formatCreatorInfoData } from "@/lib/formatters/data-objects";
import { formatKeyStatisticsData } from "@/lib/formatters/data-objects";

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

    console.log(data);
    console.log(data2);
    console.log(infoData);
    console.log(keyStatisticsData);

    return { infoData, keyStatisticsData, statsHistoryData: data2.data };
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
}
