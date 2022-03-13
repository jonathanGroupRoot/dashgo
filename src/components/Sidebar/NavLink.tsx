import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize={20} />
      <Text fontWeight="medium" ml="4">
        {children}
      </Text>
    </Link>
  );
}
