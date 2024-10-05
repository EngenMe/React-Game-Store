import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="0 10px 0 0">
      <Image src={logo} width="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
