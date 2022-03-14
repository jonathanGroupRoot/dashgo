import {
  Flex,
  Input,
  Text,
  Icon,
  Stack,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

import {
  RiMenuLine,
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Notifications } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100vw"
      maxW={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          pt="1"
          mr="2"
          variant="unstyled"
          onClick={onOpen}
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
