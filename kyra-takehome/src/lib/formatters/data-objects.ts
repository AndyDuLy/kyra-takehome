import { countries } from "../consts/countries";
import { languages } from "../consts/languages";
import {
  formatNumber,
  formatNumberTruncateDecimals,
  formatMagnitude,
  formatAsPercentage,
  formatPercentageRaise,
} from "./numbers";

import { CreatorInfoData } from "../types/creator-info";
import { KeyStatisticsData } from "../types/key-statistics-data";
import { Statistic } from "@/lib/types/statistic";

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
  const predictedFee = formatNumber(
    formatNumberTruncateDecimals(data.predictedFee || 0)
  );

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
      value: formatMagnitude(baseData.data.tiktok.followersCount || 0),
      differenceAsPercentage: formatPercentageRaise(
        trendData.data.delta.followersCount.percentage || 0
      ),
    },
    {
      type: "Average views",
      value: formatMagnitude(baseData.data.tiktok.medianViews || 0),
    },
    {
      type: "Potential sponsored views",
      value: formatMagnitude(baseData.data.tiktok.sponsoredMedianViews || 0),
    },
    {
      type: "Total likes",
      value: formatMagnitude(baseData.data.tiktok.likesCount || 0),
      differenceAsPercentage: formatPercentageRaise(
        trendData.data.delta.likesCount.percentage || 0
      ),
    },
    {
      type: "Engagement rate",
      value: formatAsPercentage(baseData.data.tiktok.engagementRate || 0),
    },
    {
      type: "Total posts",
      value: baseData.data.tiktok.postsCount || 0,
      differenceAsPercentage: trendData.data.delta.postsCount.absolute || 0,
    },
  ];

  return insightsData;
}
