import React, { useEffect, useState } from "react";
import classes from "./ReceivingBox.module.scss";
import { Box, Flex } from "@chakra-ui/react";
import InputField from "@/common/InputField";
import { useForm, FormProvider } from "react-hook-form";
import SelectField from "@/common/Select";
import { CategoriesList } from "../CategoriesList";
import {
  IDirection,
  directionSelector,
} from "@/features/directions/directionsSlice";
import { useAppSelector } from "@/hooks/reduxHooks";
import { filterSelector } from "@/features/filters/filtersSlice";
import { tabSelector } from "@/features/tabs/tabsSlice";
function ReceivingBox({}) {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [directions, setDirections] = useState<IDirection[]>([]);
  const [active, setActive] = useState<string>("BTC");
  const { activeDirection } = useAppSelector(directionSelector);

  const [activeTab, setActiveTab] = useState<string>("all");
  const { activeReceivingTab, tabs } = useAppSelector(tabSelector);
  useEffect(() => {
    setActiveTab(activeReceivingTab);
  }, [activeReceivingTab]);

  useEffect(() => {
    setActive(activeDirection);
  }, [activeDirection]);

  const { filtersList } = useAppSelector(filterSelector);

  useEffect(() => {
    let filtered = filtersList.find(({ from }) => {
      return from.code === active;
    });
    setDirections(
      filtered?.to.filter((direction) => {
        if (activeTab === "all") return true;
        if (
          tabs[activeReceivingTab].currencies.some(
            (element) => element === direction.code
          )
        )
          return true;
        return false;
      }) || []
    );
  }, [active, activeTab]);

  return (
    <Box className={classes.SearchBox}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CategoriesList categoryType="receive" />
          <Flex>
            <InputField name="receive_input" />
            <SelectField
              onChange={() => {}}
              name="receive_select"
              options={directions && directions}
            />
          </Flex>
        </form>
      </FormProvider>
    </Box>
  );
}

export default ReceivingBox;
