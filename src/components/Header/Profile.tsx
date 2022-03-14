import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ricardo Fonseca</Text>
          <Text>ricardo@upper.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Ricardo Fonseca"
        src="https://github.com/0xrfsd.png"
      />
    </Flex>
  );
}
