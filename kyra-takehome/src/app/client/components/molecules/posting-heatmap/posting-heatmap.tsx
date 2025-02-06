import React from "react";
import styles from "./posting-heatmap.module.css";
import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";
import { HeatmapData } from "@/lib/types/chart-data";
import PillContainer from "@/app/client/components/molecules/pill-container/pill-container";
import RowContainer from "@/app/client/components/atoms/row-container/row-container";
import { formatLastPostedOn } from "@/lib/formatters/dates";

const PostingHeatmap = ({ data }: { data: HeatmapData }) => {
  const calculateStartDate = (endDate: Date, monthsToSubtract: number) => {
    const date = new Date(endDate);
    date.setMonth(date.getMonth() - monthsToSubtract);
    return date;
  };

  const lastPostedOn = data.lastPostedOn ? new Date(data.lastPostedOn) : null;
  const formattedDate = lastPostedOn ? formatLastPostedOn(lastPostedOn) : "n/a";

  const weekdayLabels: [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className={styles.heatmapCanvas}>
      <RowContainer className={styles.rowContainer}>
        <h1 className={styles.heatmapH1}>Posting history</h1>

        <h1 className={styles.lastPostedOn}>Last posted: {formattedDate}</h1>
        <PillContainer
          className={styles.heatmapPill}
          iconName="tiktok"
          iconSize={14}
          variant={"secondary"}
        >
          Tiktok data only
        </PillContainer>
      </RowContainer>

      <div className={styles.heatmapContainer}>
        <div>
          <CalendarHeatmap
            startDate={calculateStartDate(new Date(data.endDate), 10)}
            endDate={new Date(data.endDate)}
            values={data.points}
            showWeekdayLabels={true}
            weekdayLabels={weekdayLabels}
            showMonthLabels={true}
            gutterSize={3}
            classForValue={(value) => {
              if (value?.count === null) return styles.testDataEmpty;
              if (!value || value.count === 0) return styles.colorEmpty;
              return value?.count === 0
                ? styles.colorEmpty
                : styles.colorPosting;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostingHeatmap;
