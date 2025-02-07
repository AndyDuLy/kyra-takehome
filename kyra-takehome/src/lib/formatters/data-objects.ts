import {
  formatNumberTruncateDecimals,
  formatMagnitude,
  formatAsPercentage,
  formatPercentageRaise,
  determineMagnitude,
} from "./numbers";

import { CreatorInfoData } from "@/lib/types/creator-info";
import { KeyStatisticsData, Statistic } from "@/lib/types/statistics";
import { DataPoint, HeatmapData, HeatmapDataPoint } from "@/lib/types/charts";
import { formatDateNoYear } from "@/lib/formatters/dates";
import { countries } from "@/lib/consts/countries";
import { languages } from "@/lib/consts/languages";

export function formatCreatorInfoData(data: any) {
  const creatorInfoData: CreatorInfoData = {
    src: data.data?.tiktok?.profilePicture || "",
    name: data.data?.tiktok?.nickname || "",
    location:
      countries[data.data?.tiktok?.region as keyof typeof countries] || "",
    language:
      languages[data.data?.tiktok?.language as keyof typeof languages] || "",
    socialMedia: {
      tiktok: data.data?.tiktok?.handle || "",
      tiktokBio: data.data?.tiktok?.bio || "",
      instagram: data.data?.instagram?.handle || "",
      youtube: data.data?.youtube?.channelId || "",
    },
  };

  return creatorInfoData;
}

export function formatKeyStatisticsData(data: any) {
  // TODO: confirm trunc or mockup fee was flat by chance
  const predictedFee = formatNumberTruncateDecimals(data.predictedFee || 0);

  const keyStatisticsData: KeyStatisticsData[] = [
    {
      title: "Average Kyra fee",
      value: data.kyraFee || 0,
    },
    {
      title: "Average Kyra CPV",
      value: data.kyraCPV || 0,
    },
    {
      title: "Predicted fee",
      value: predictedFee,
    },
    {
      title: "Predicted CPV",
      value: data.predictedCpv || 0,
    },
  ];

  return keyStatisticsData;
}

export function formatInsightsData(baseData: any, trendData: any) {
  const insightsData: Statistic[] = [
    {
      type: "Followers",
      value: formatMagnitude(baseData.data.tiktok.followersCount),
      magnitude: determineMagnitude(baseData.data.tiktok.followersCount),
      differenceAsPercentage: formatPercentageRaise(
        trendData.data.delta.followersCount.percentage || 0
      ),
    },
    {
      type: "Average views",
      value: formatMagnitude(baseData.data.tiktok.medianViews),
      magnitude: determineMagnitude(baseData.data.tiktok.medianViews),
    },
    {
      type: "Potential sponsored views",
      value: formatMagnitude(baseData.data.tiktok.sponsoredMedianViews),
      magnitude: determineMagnitude(baseData.data.tiktok.sponsoredMedianViews),
    },
    {
      type: "Total likes",
      value: formatMagnitude(baseData.data.tiktok.likesCount),
      magnitude: determineMagnitude(baseData.data.tiktok.likesCount),
      differenceAsPercentage: formatPercentageRaise(
        trendData.data.delta.likesCount.percentage || 0
      ),
    },
    {
      type: "Engagement rate",
      value: formatMagnitude(baseData.data.tiktok.engagementRate),
      magnitude: determineMagnitude(baseData.data.tiktok.engagementRate),
    },
    {
      type: "Total posts",
      value: formatMagnitude(baseData.data.tiktok.postsCount),
      magnitude: determineMagnitude(baseData.data.tiktok.postsCount),
      differenceAsPercentage: trendData.data.delta.postsCount.absolute || 0,
    },
  ];

  return insightsData;
}

export function formatChartData(data: any) {
  let historyPoints: DataPoint[] = [];

  data.historyPoints.map((point: any) => {
    let currentDataPoint: DataPoint = {
      date: formatDateNoYear(point.createdAt),
      likesCount: point.likesCount,
      followersCount: point.followersCount,
    };

    historyPoints.push(currentDataPoint);
  });

  return historyPoints;
}

export function formatHeatmapData(data: any) {
  let heatmapDataPoints: HeatmapDataPoint[] = [];

  let lastPostedOn = data.historyPoints.find(
    (point: any) => point.postsCount > 0
  )?.createdAt;

  data.historyPoints.map((point: any) => {
    heatmapDataPoints.push({
      date: point.createdAt,
      count: point.postsCount,
    });
  });

  const heatmapData: HeatmapData = {
    startDate: data.historyPoints[0].createdAt,
    endDate: data.historyPoints[data.historyPoints.length - 1].createdAt,
    points: heatmapDataPoints,
    lastPostedOn: lastPostedOn,
  };

  return heatmapData;
}
