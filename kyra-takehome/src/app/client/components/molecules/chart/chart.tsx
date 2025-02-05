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
  Legend
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

  const data = {
    labels,
    datasets: [
      {
        label: "Daily likes",
        data: likesCount,
        borderColor: "#5C9F6E",
        backgroundColor: "#5C9F6E",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Daily followers",
        data: followersCount,
        borderColor: "#30726E",
        backgroundColor: "#30726E",
        borderWidth: 1,
        fill: true,
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
