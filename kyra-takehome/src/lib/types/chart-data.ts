export type DataPoint = {
  date: string;
  likesCount: number;
  followersCount: number;
};

export type HeatmapDataPoint = {
  date: Date;
  count: number;
};

export type HeatmapData = {
  startDate: Date;
  endDate: Date;
  points: HeatmapDataPoint[];
  lastPostedOn: Date;
};
