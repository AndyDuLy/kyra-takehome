import styles from "./account-info.module.css";

import { CreatorInfoData } from "@/lib/types/creator-info";
import { Statistic } from "@/lib/types/statistics";

import RowContainer from "@/components/atoms/row-container/row-container";
import Card from "@/components/atoms/card/card";
import PillContainer from "@/components/molecules/pill-container/pill-container";
import InsightsContainer from "@/components/molecules/insights-container/insights-container";

interface AccountInfoProps {
  infoData: CreatorInfoData;
  tiktokInsightsData: Statistic[];
  instagramInsightsData: Statistic[];
}

export default function AccountInfo({
  infoData,
  tiktokInsightsData,
  instagramInsightsData,
}: AccountInfoProps) {
  return (
    <>
      <RowContainer className={styles.accountInfoSection}>
        <Card className={styles.accountInfoCard}>
          <h1 className={styles.profileBio}> Profile Bio </h1>

          <RowContainer className={styles.profileBioContainer}>
            <PillContainer iconName="tiktok" variant="secondary">
              {`@${infoData.socialMedia.tiktok}`}
            </PillContainer>

            <h1 className={styles.profileBio}>
              {infoData.socialMedia.tiktokBio}
            </h1>
          </RowContainer>
        </Card>
      </RowContainer>

      <InsightsContainer
        tiktokStatistics={tiktokInsightsData}
        instagramStatistics={instagramInsightsData}
      />
    </>
  );
}
