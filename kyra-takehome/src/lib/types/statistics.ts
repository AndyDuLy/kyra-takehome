export type Statistic = {
  type: string;
  value: number;
  magnitude?: string;
  differenceAsPercentage?: number;
};

export type KeyStatisticsData = {
  title: string;
  value: number;
};
