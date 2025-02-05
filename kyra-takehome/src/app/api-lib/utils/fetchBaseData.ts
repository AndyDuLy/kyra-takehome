import { countries } from "@/lib/consts/countries";
import { languages } from "@/lib/consts/languages";
import { CreatorInfoData } from "@/lib/types/creator-info";

export async function fetchBaseData() {
  try {
    const [res, res2] = await Promise.all([
      fetch("/api/base-data"),
      fetch("/api/stats-history"),
    ]);

    if (!res.ok) throw new Error("Failed to fetch Kyra data");
    if (!res2.ok) throw new Error("Failed to fetch Kyra data");

    const [data, data2] = await Promise.all([res.json(), res2.json()]);

    const infoData: CreatorInfoData = {
      src: data.data?.tiktok?.profilePicture || "",
      name: data.data?.tiktok?.nickname || "",
      location:
        countries[data.data?.tiktok?.region as keyof typeof countries] || "",
      language:
        languages[data.data?.tiktok?.language as keyof typeof languages] || "",
      socialMedia: {
        tiktok: data.data?.tiktok?.handle || "",
        instagram: data.data?.instagram?.handle || "",
        youtube: data.data?.youtube?.channelId || "",
      },
    };

    console.log(data.data);
    console.log(data2.data);

    return { infoData, statsHistoryData: data2.data };
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
}
