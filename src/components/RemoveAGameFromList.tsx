import { Heading } from '@chakra-ui/react';

interface Props {
  children: string;
}

const RemoveAGameFromList = ({ children }: Props) => {
  return (
    <Heading fontSize={{ base: '2xl', sm: 'xl' }}>
      {children.includes('God of') ? 'Not a God' : children}
    </Heading>
  );
};

export default RemoveAGameFromList;
