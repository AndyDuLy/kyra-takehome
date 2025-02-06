import styles from "./chart.module.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import Card from "@/app/client/components/atoms/card/card";
import { options } from "@/lib/consts/chart-options";
import { DataPoint } from "@/lib/types/chart-data";
import PillContainer from "@/app/client/components/molecules/pill-container/pill-container";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart: React.FC<{ chartData: DataPoint[] }> = ({ chartData }) => {
  let labels: string[] = [];
  let likesCount: number[] = [];
  let followersCount: number[] = [];

  chartData.forEach((point) => {
    labels.push(point.date);
    likesCount.push(point.likesCount);
    followersCount.push(point.followersCount);
  });

  const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 1026);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.2, `${color}00`);
    return gradient;
  };

  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) throw new Error("Could not create canvas context");

  const data = {
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

  return (
    <Card className={styles.chart}>
      <PillContainer
        iconName="tiktok"
        variant="secondary"
        children="Tiktok data only"
        className={styles.pillContainer}
      />

      <Line data={data} options={options} />
    </Card>
  );
};

export default Chart;
