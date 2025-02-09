import styles from "@/components/organisms/posting-heatmap/posting-heatmap.module.css";
import { heatmapMonthsRange } from "@/lib/consts/heatmap";

export const calculateStartDate = (endDate: Date) => {
  const date = new Date(endDate);
  date.setMonth(date.getMonth() - heatmapMonthsRange);
  return date;
};

export const dynamicRectangleStyling = (value: number) => {
  if (!value || value === 0) return styles.colorEmpty;
  return value === 0 ? styles.colorEmpty : styles.colorPosting;
};
