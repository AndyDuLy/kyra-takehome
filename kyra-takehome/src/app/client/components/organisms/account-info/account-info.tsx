import styles from "./account-info.module.css";

import { CreatorInfoData } from "@/lib/types/creator-info";

import RowContainer from "@/app/client/components/atoms/row-container/row-container";
import Card from "@/app/client/components/atoms/card/card";
import PillContainer from "../../molecules/pill-container/pill-container";

interface AccountInfoProps {
  infoData: CreatorInfoData;
}

export default function AccountInfo({ infoData }: AccountInfoProps) {
  return (
    <RowContainer className={styles.accountInfoSection}>
      <Card className={styles.accountInfoCard}>
        <h1 className={styles.profileBio}> Profile Bio </h1>

        <RowContainer className={styles.profileBioContainer}>
          <PillContainer
            iconName="tiktok"
            variant="secondary"
            children={`@${infoData.socialMedia.tiktok}`}
          />

          <h1 className={styles.profileBio}>
            {infoData.socialMedia.tiktokBio}
          </h1>
        </RowContainer>
      </Card>
    </RowContainer>
  );
}
