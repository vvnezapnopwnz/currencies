import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface IInputFieldProps {
  name: string;
  typeField?: string;
}

function InputField({ name, typeField = "text" }: IInputFieldProps) {
  const {
    register,
  } = useFormContext();

  return (
    <Input
      position="relative"
      borderRight="0"
      padding="0"
      borderRadius="5px 0px 0px 5px"
      border="1px solid #B2BEB5"
      outline="none"
      w="100%"
      marginLeft="10px"
      id={name}
      type={typeField}
      aria-label={name}
      {...register(name)}
    />
  );
}

export default InputField;
