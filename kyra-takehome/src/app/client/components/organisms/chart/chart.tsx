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

import { options } from "@/lib/consts/charts";
import { DataPoint } from "@/lib/types/charts";
import { createChartData } from "@/lib/utils/chart-utils";

import Card from "@/app/client/components/atoms/card/card";
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

interface ChartProps {
  chartData: DataPoint[];
}

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) throw new Error("Could not create canvas context");

  const data = createChartData(chartData, ctx);

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
