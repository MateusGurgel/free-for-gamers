import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CategoryCardProps {
  category: string;
  selected: boolean;
  onSelect: (category: string) => void;
}

export function CategoryBadge({
  category,
  selected,
  onSelect,
}: CategoryCardProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.3,
        borderRadius: 8,
        rotateZ: 3,
        boxShadow: "0px 0px 2px 1px #00FFFF",
      }}
      whileTap={{ scale: 1 }}
      onClick={() => onSelect(category)}
    >
      <Flex
        boxShadow={selected ? "0px 0px 2px 1px #00FFFF" : ""}
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
    </motion.button>
  );
}
