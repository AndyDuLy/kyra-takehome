import styles from "./header-tabs.module.css";

import { headerTabs } from "@/lib/consts/header-tabs";
import RowContainer from "@/app/client/components/atoms/row-container/row-container";

interface HeaderTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function HeaderTabs({
  activeTab,
  setActiveTab,
}: HeaderTabsProps) {
  return (
    <RowContainer className={styles.headerTabsSection}>
      {headerTabs.map((tab) => (
        <h2
          key={tab}
          className={`${styles.headerTab} ${
            activeTab === tab ? styles.active : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </h2>
      ))}
    </RowContainer>
  );
}
