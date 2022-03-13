import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
      <Text fontWeight="bold" letterSpacing="tight" w="64" fontSize="3xl">
        Uppernodes
        <Text as="span" color="pink.500">
          .com
        </Text>
      </Text>
  );
}
