import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px 30px 10px 10px">
      <Image src={logo} width="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
