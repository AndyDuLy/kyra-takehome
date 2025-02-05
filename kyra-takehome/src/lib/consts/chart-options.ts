import { formatMagnitude } from "../formatters/numbers";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
      align: "start" as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
      },
    },
  },
  scales: {
    x: {
      title: { display: true },
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
        color: "#FFFFFF",
        font: {
          size: 10,
          weight: 300,
        },
      },
      border: {
        color: "#FFFFFF",
        width: 0.5,
      },
    },
    y: {
      title: { display: true },
      ticks: {
        callback: (tickValue: string | number) => {
          const value =
            typeof tickValue === "number" ? tickValue : parseFloat(tickValue);
          return formatMagnitude(value);
        },
        color: "#FFFFFF",
        font: {
          size: 10,
          weight: 300,
        },
      },
      border: {
        color: "#FFFFFF",
        width: 0.5,
      },
    },
  },
};
