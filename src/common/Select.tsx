import { IDirection } from "@/features/directions/directionsSlice";
import { Box, Select } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

interface ISelectFieldProps {
  name: string;
  options: IDirection[];
  onChange(e: string): void;
}

function SelectField({ name, options, onChange }: ISelectFieldProps) {
  const { control } = useFormContext();

  return (
    <Box
      boxShadow="0 0 1px rgba(0,0,0,0.5)"
      borderRadius="0px 5px 5px 0px"
      border="1px solid #B2BEB5"
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { name } }) => (
          <Select
            borderLeft={0}
            border="none"
            padding={5}
            backgroundColor="#FFF"
            w={0}
            outline="none"
            icon={<></>}
            id={name}
            onChange={(e) => onChange(e.target.value)}
            aria-label={name}
          >
            {options &&
              options.map(({ code }) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
          </Select>
        )}
      />
    </Box>
  );
}

export default SelectField;
