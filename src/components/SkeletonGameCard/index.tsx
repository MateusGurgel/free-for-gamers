import {
  Box,
  Card,
  Flex,
  Stack,
  Heading,
  Skeleton,
  CardBody,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export function SkeletonGameCard() {
  return (
    <motion.div
      animate={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Card maxW="sm" bg="ui" color="white" height={384}>
        <CardBody>
          <Skeleton>
            <Box width={344} height={195} />
          </Skeleton>

          <Stack mt="6" spacing="3">
            <Heading size="md" fontSize="lg">
              <Flex wrap="wrap" gap={3}></Flex>
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  );
}
