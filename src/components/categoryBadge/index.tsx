import { Flex } from "@chakra-ui/react";

interface CategoryCardProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryCardProps) {
  return (
    <Flex
      align="center"
      justify="center"
      
      bg="ui"
      
      paddingX="3"
      paddingY="1"

      borderRadius={8}

      fontSize="lg"
      fontWeight="light"
    >
      <p>{category}</p>
    </Flex>
  );
}
