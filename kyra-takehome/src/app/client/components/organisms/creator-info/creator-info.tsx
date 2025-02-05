import styles from "./creator-info.module.css";

import { CreatorInfoData } from "@/lib/types/creator-info";

import Icon from "@/app/client/components/atoms/icon/icon";
import Image from "@/app/client/components/atoms/image/image";
import RowContainer from "@/app/client/components/atoms/row-container/row-container";

import PillContainer from "@/app/client/components/molecules/pill-container/pill-container";
import { socialMediaLinks } from "@/lib/consts/social-media-links";

interface CreatorInfoProps {
  alt: string;
  infoData: CreatorInfoData;
}

export default function CreatorInfo({ alt, infoData }: CreatorInfoProps) {
  return (
    <div className={styles.creatorInfo}>
      <Image src={infoData.src} alt={alt} width={125} height={125} />

      <RowContainer>
        <h1> {infoData.name} </h1>
        <Icon name="bookmark" color="var(--contrast-color)" />
        <Icon name="share" color="var(--contrast-color)" />
      </RowContainer>

      <RowContainer>
        <PillContainer
          iconName="locationPin"
          children={infoData.location}
          variant="primary"
        />

        <PillContainer
          iconName="language"
          children={infoData.language}
          variant="primary"
        />
      </RowContainer>

      <RowContainer>
        <PillContainer
          iconName="tiktok"
          children={`@${infoData.socialMedia.tiktok}`}
          redirectUrl={`${socialMediaLinks.tiktok}${infoData.socialMedia.tiktok}`}
          variant="secondary"
        />
        <PillContainer
          iconName="instagram"
          children={`@${infoData.socialMedia.instagram}`}
          redirectUrl={`${socialMediaLinks.instagram}${infoData.socialMedia.instagram}`}
          variant="secondary"
        />
        <PillContainer
          iconName="youtube"
          children="YouTube"
          redirectUrl={`${socialMediaLinks.youtube}${infoData.socialMedia.youtube}`}
          variant="secondary"
        />
      </RowContainer>
    </div>
  );
}
