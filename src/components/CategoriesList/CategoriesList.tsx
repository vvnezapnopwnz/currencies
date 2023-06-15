import React, { useState, useEffect } from "react";
import classes from "./CategoriesList.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  ITab,
  tabSelector,
  setActiveReceivingTab,
  setActiveSendingTab,
} from "@/features/tabs/tabsSlice";

import { Flex } from "@chakra-ui/react";
import TabButton from "@/common/Button";

function CategoriesList({ categoryType }: { categoryType: string }) {
  const [tabs, setTabs] = useState<ITab>({});
  const {
    tabs: selectedTabs,
    activeReceivingTab,
    activeSendingTab,
  } = useAppSelector(tabSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTabs(selectedTabs);
  }, [selectedTabs]);

  const setActiveTab = (value: string) => {
    if (categoryType === "send") {
      dispatch(setActiveSendingTab(value));
    } else {
      dispatch(setActiveReceivingTab(value));
    }
  };

  let activeType =
    categoryType === "send" ? activeSendingTab : activeReceivingTab;

  const tabsList = Object.entries(tabs).map((tab) => {
    const [tabValue, { name }] = tab;
    return (
      <TabButton
        active={
          (activeSendingTab === activeType && activeSendingTab === tabValue) ||
          (activeReceivingTab === activeType && activeReceivingTab === tabValue)
        }
        key={tabValue}
        name={name}
        onClick={() => setActiveTab(tabValue)}
      />
    );
  });

  return <Flex className={classes.CategoriesList}>{tabsList}</Flex>;
}

export default CategoriesList;
