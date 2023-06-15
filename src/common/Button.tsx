import { Button } from "@chakra-ui/react";
import { ITabButton } from "@interfaces/ITabButton";

const TabButton = ({ name, active, onClick }: ITabButton) => {
  return (
    <Button
      onClick={onClick}
      _active={{
        backgroundColor: "#F88379",
      }}
      border="none"
      outline="none"
      isActive={active}
      colorScheme="teal"
      variant="ghost"
      _hover={{
        backgroundColor: "#F88379",
        borderColor: "#F88379",
        color: "#FFFFFF",
      }}
    >
      {name}
    </Button>
  );
};

export default TabButton;
