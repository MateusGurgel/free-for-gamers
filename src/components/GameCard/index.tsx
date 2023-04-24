import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

interface GameCardProps {
  imageUrl: string;
  name: string;
  description: string;
  category: string;
}

export function GameCard(props: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card maxW="sm" bg="ui" color="white">
        <CardBody>
          <Image src={props.imageUrl} alt="Game" width={344} height={194.15} />

          <Stack mt="6" spacing="3">
            <Heading size="md" fontSize="lg">
              <Flex wrap="wrap" gap={3}>
                <p>{props.name}</p>
                <Badge
                  colorScheme="green"
                  fontWeight="light"
                  fontSize="md"
                  paddingX="3"
                  color="white"
                  bg="#3FBE44"
                >
                  Free
                </Badge>
              </Flex>
            </Heading>
            <Text>{props.description}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex width="100%" height="100%" flexDirection="row-reverse">
            <Badge
              colorScheme="green"
              fontWeight="light"
              fontSize="md"
              paddingX="3"
              color="white"
              bg="#3FBE44"
            >
              {props.category}
            </Badge>
          </Flex>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
