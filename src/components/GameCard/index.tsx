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

interface GameCardProps {
  imageUrl: string;
  name: string;
  description: string;
  category: string;
}

export function GameCard(props: GameCardProps) {
  return (
    <Card maxW="sm" bg="ui" color="white" height={427}>
      <CardBody>
        <Image src={props.imageUrl} alt="Game" width={344} height={194.15}/>

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
        <Flex width="100%" flexDirection="row-reverse">
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
  );
}
