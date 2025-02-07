import { formatDayMonth } from "../formatters/dates";
import { DataPoint } from "../types/charts";

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  color: string
) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 1026);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.2, `${color}00`);
  return gradient;
};

export const createChartData = (
  chartData: DataPoint[],
  ctx: CanvasRenderingContext2D
) => {
  const labels: string[] = [];
  const likesCount: number[] = [];
  const followersCount: number[] = [];

  chartData.forEach((point) => {
    labels.push(formatDayMonth(new Date(point.date)));
    likesCount.push(point.likesCount);
    followersCount.push(point.followersCount);
  });

  return {
    labels,
    datasets: [
      {
        label: "Daily likes",
        data: likesCount,
        borderColor: "#5C9F6E",
        backgroundColor: createGradient(ctx, "#5C9F6E"),
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Daily followers",
        data: followersCount,
        borderColor: "#30726E",
        backgroundColor: createGradient(ctx, "#30726E"),
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };
};
