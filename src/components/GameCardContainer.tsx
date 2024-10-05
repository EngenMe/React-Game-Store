import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: '200px', md: '360px', lg: '230px', xl: '210px' }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
