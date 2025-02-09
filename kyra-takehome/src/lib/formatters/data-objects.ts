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
import { formatDateNoYear, formatDateAsDateType } from "@/lib/formatters/dates";
import { countries } from "@/lib/consts/countries";
import { languages } from "@/lib/consts/languages";

export function formatCreatorInfoData(data: {
  data: {
    tiktok: {
      profilePicture: string;
      nickname: string;
      region: string;
      language: string;
      handle: string;
      bio: string;
    };
    instagram: { handle: string };
    youtube: { channelId: string };
  };
}) {
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

export function formatKeyStatisticsData(data: {
  predictedFee?: number;
  kyraFee?: number;
  kyraCPV?: number;
  predictedCpv?: number;
}) {
  // TODO: confirm trunc or mockup fee was flat by chan
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

export function formatTiktokInsightsData(
  baseData: {
    data: {
      tiktok: {
        followersCount: number;
        medianViews: number;
        sponsoredMedianViews: number;
        likesCount: number;
        engagementRate: number;
        postsCount: number;
      };
    };
  },
  trendData: {
    data: {
      delta: {
        followersCount: { percentage: number };
        likesCount: { percentage: number };
        postsCount: { absolute: number };
      };
    };
  }
) {
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
      value: formatAsPercentage(baseData.data.tiktok.engagementRate),
      magnitude: determineMagnitude(baseData.data.tiktok.engagementRate) || "%",
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

export function formatInstagramInsightsData(baseData: {
  data: {
    instagram: {
      followersCount: number;
      medianViews: number;
      sponsoredMedianViews: number;
      likesCount: number;
      engagementRate: number;
      postsCount: number;
    };
  };
}) {
  const insightsData: Statistic[] = [
    {
      type: "Followers",
      value: formatMagnitude(baseData.data.instagram.followersCount) || 42.8,
      magnitude:
        determineMagnitude(baseData.data.instagram.followersCount) || "m",
    },
    {
      type: "Average views",
      value: formatMagnitude(baseData.data.instagram.medianViews) || 0,
      magnitude: determineMagnitude(baseData.data.instagram.medianViews),
    },
    {
      type: "Potential sponsored views",
      value: formatMagnitude(baseData.data.instagram.sponsoredMedianViews) || 0,
      magnitude: determineMagnitude(
        baseData.data.instagram.sponsoredMedianViews
      ),
    },
    {
      type: "Total likes",
      value: formatMagnitude(baseData.data.instagram.likesCount) || 0,
      magnitude: determineMagnitude(baseData.data.instagram.likesCount),
    },
    {
      type: "Engagement rate",
      value:
        formatAsPercentage(baseData.data.instagram.engagementRate) || 328.8,
      magnitude:
        determineMagnitude(baseData.data.instagram.engagementRate) || "k%",
    },
    {
      type: "Total posts",
      value: formatMagnitude(baseData.data.instagram.postsCount) || 0,
      magnitude: determineMagnitude(baseData.data.instagram.postsCount),
    },
  ];

  return insightsData;
}

export function formatChartData(data: {
  historyPoints: {
    createdAt: string;
    likesCount: number;
    followersCount: number;
  }[];
}) {
  const historyPoints: DataPoint[] = [];

  data.historyPoints.map(
    (point: {
      createdAt: string;
      likesCount: number;
      followersCount: number;
    }) => {
      const currentDataPoint: DataPoint = {
        date: formatDateNoYear(point.createdAt),
        likesCount: point.likesCount,
        followersCount: point.followersCount,
      };

      historyPoints.push(currentDataPoint);
    }
  );

  return historyPoints;
}

export function formatHeatmapData(data: {
  historyPoints: { createdAt: string; postsCount: number }[];
}) {
  const heatmapDataPoints: HeatmapDataPoint[] = [];

  const lastPostedOn = data.historyPoints.find(
    (point: { createdAt: string; postsCount: number }) => point.postsCount > 0
  )?.createdAt;

  data.historyPoints.map((point: { createdAt: string; postsCount: number }) => {
    heatmapDataPoints.push({
      date: formatDateAsDateType(point.createdAt),
      count: point.postsCount,
    });
  });

  const heatmapData: HeatmapData = {
    startDate: formatDateAsDateType(data.historyPoints[0].createdAt),
    endDate: formatDateAsDateType(
      data.historyPoints[data.historyPoints.length - 1].createdAt
    ),
    points: heatmapDataPoints,
    lastPostedOn: formatDateAsDateType(lastPostedOn || ""),
  };

  return heatmapData;
}
