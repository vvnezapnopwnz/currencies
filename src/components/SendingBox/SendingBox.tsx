import React, { useState, useEffect } from "react";
import classes from "./SendingBox.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ITab, setActiveReceivingTab, tabSelector } from "./../../features/tabs/tabsSlice";
import {
  IDirection,
  setActiveDirection,
  directionSelector,
} from "./../../features/directions/directionsSlice";
import { Box, Flex } from "@chakra-ui/react";
import InputField from "@/common/InputField";
import { useForm, FormProvider } from "react-hook-form";
import SelectField from "@/common/Select";
import { CategoriesList } from "../CategoriesList";
function SendingBox() {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [directions, setDirections] = useState<IDirection[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");
  const { directionsList } = useAppSelector(directionSelector);
  const { activeSendingTab, tabs } = useAppSelector(tabSelector)
  const dispatch = useAppDispatch();
  useEffect(() => {
    setActiveTab(activeSendingTab)
  }, [activeSendingTab])

  useEffect(() => {
    setDirections(directionsList.filter((direction) => {
      if(activeTab  === 'all') return true
      if(tabs[activeSendingTab].currencies.some((element) => element === direction.code)) return true
      return false
    }))
  }, [directionsList, activeTab]);

  const onDirectionChange = (direction: string) => {
    dispatch(setActiveDirection(direction)) 
    dispatch(setActiveReceivingTab('all'))
  };

  return (
    <Box className={classes.SearchBox}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CategoriesList categoryType="send" />
          <Flex>
            <InputField name="send_input" />
            <SelectField
              onChange={(e) => {
                onDirectionChange(e)
              }}
              name="send_select"
              options={directions && directions}
            />
          </Flex>
        </form>
      </FormProvider>
    </Box>
  );
}

export default SendingBox;
