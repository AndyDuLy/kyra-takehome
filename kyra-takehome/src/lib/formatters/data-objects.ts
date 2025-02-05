import { countries } from "../consts/countries";
import { languages } from "../consts/languages";
import { formatNumber, formatNumberTruncateDecimals } from "./numbers";

import { CreatorInfoData } from "../types/creator-info";
import { KeyStatisticsData } from "../types/key-statistics-data";

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
