import styles from "./creator-info.module.css";

import { CreatorInfoData } from "@/lib/types/creator-info";

import Icon from "@/components/atoms/icon/icon";
import Image from "@/components/atoms/image/image";
import RowContainer from "@/components/atoms/row-container/row-container";

import PillContainer from "@/components/molecules/pill-container/pill-container";
import { socialMediaLinks } from "@/lib/consts/social-media-links";

interface CreatorInfoProps {
  alt: string;
  infoData: CreatorInfoData;
}

export default function CreatorInfo({ alt, infoData }: CreatorInfoProps) {
  return (
    <div className={styles.creatorInfo}>
      <Image src={infoData.src} alt={alt} width={150} height={150} />

      <RowContainer>
        <h1 className={styles.creatorInfoName}> {infoData.name} </h1>
        <Icon
          name="bookmark"
          color="var(--contrast-color)"
          onClick={() => {
            alert(`${infoData.name} bookmarked!`);
          }}
        />
        <Icon
          name="share"
          color="var(--contrast-color)"
          onClick={() => {
            alert(`${infoData.name} shared!`);
          }}
        />
      </RowContainer>

      <RowContainer>
        <PillContainer iconName="locationPin" variant="primary">
          {infoData.location}
        </PillContainer>

        <PillContainer iconName="language" variant="primary">
          {infoData.language}
        </PillContainer>
      </RowContainer>

      <RowContainer>
        <PillContainer
          iconName="tiktok"
          redirectUrl={`${socialMediaLinks.tiktok}${infoData.socialMedia.tiktok}`}
          variant="secondary"
        >
          {`@${infoData.socialMedia.tiktok}`}{" "}
        </PillContainer>
        <PillContainer
          iconName="instagram"
          redirectUrl={`${socialMediaLinks.instagram}${infoData.socialMedia.instagram}`}
          variant="secondary"
        >
          {`@${infoData.socialMedia.instagram}`}{" "}
        </PillContainer>
        <PillContainer
          iconName="youtube"
          redirectUrl={`${socialMediaLinks.youtube}${infoData.socialMedia.youtube}`}
          variant="secondary"
        >
          YouTube
        </PillContainer>
      </RowContainer>
    </div>
  );
}
