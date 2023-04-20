import { Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="ui" w="100%" p={4} color="white">
      <header>
        <Box fontWeight="bold" color="brand" letterSpacing="wide" fontSize="gg">
          <h1>Free For Gamers</h1>
        </Box>
      </header>
    </Box>
  );
}
