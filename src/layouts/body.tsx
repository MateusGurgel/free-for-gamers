import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyInterface {
  children: ReactNode;
}

export default function Body({ children }: BodyInterface) {
  return (
    <Box width="100%" height="calc(100vh - 75px )" bg="background" color="white">
      <main>{children}</main>
    </Box>
  );
}
