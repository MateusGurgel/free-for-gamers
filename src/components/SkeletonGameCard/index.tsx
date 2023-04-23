import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";

export function SkeletonGameCard() {
  return (
    <Card maxW="sm" bg="ui" color="white" height={384}>
      <CardBody>
        <Skeleton>
          <Box width={344} height={195} />
        </Skeleton>

        <Stack mt="6" spacing="3">
          <Heading size="md" fontSize="lg">
            <Flex wrap="wrap" gap={3}>
            </Flex>
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}
