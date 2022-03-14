import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontWeight="bold" letterSpacing="tight" w="64" fontSize={["2xl", "3xl"]}>
      Upper
      <Text as="span" color="pink.500">
        .com
      </Text>
    </Text>
  );
}
