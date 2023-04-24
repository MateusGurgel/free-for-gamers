import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyInterface {
  children: ReactNode;
}

export default function Body({ children }: BodyInterface) {
  return (
    <Flex
      padding={4}
      justify="center"
      width="100%"
      minHeight="calc(100vh - 75px )"
      bg="background"
      color="white"
    >
      <main>{children}</main>
    </Flex>
  );
}
