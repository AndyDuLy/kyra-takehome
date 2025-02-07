import React from "react";
import styles from "./posting-heatmap.module.css";

import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";

import { HeatmapData } from "@/lib/types/charts";
import { formatLastPostedOn } from "@/lib/formatters/dates";
import { weekdayLabels } from "@/lib/consts/charts";
import {
  calculateStartDate,
  dynamicRectangleStyling,
} from "@/lib/utils/heatmap-utils";

import PillContainer from "@/app/client/components/molecules/pill-container/pill-container";
import RowContainer from "@/app/client/components/atoms/row-container/row-container";

interface PostingHeatmapProps {
  data: HeatmapData;
}

const PostingHeatmap = ({ data }: PostingHeatmapProps) => {
  const lastPostedOn = data.lastPostedOn ? new Date(data.lastPostedOn) : null;
  const formattedDate = lastPostedOn ? formatLastPostedOn(lastPostedOn) : "n/a";

  return (
    <div className={styles.heatmapCanvas}>
      <RowContainer className={styles.rowContainer}>
        <div className={styles.heatmapHeadings}>
          <h1 className={styles.heatmapH1}>Posting history</h1>
          <h1 className={styles.lastPostedOn}>Last posted: {formattedDate}</h1>
        </div>

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
            startDate={calculateStartDate(new Date(data.endDate))}
            endDate={new Date(data.endDate)}
            values={data.points}
            showWeekdayLabels={true}
            weekdayLabels={weekdayLabels}
            showMonthLabels={true}
            gutterSize={3}
            classForValue={(value) => {
              return dynamicRectangleStyling(value?.count);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostingHeatmap;
