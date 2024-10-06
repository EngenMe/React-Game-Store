import {
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  const placeholder = useBreakpointValue({ base: '', md: 'Search games...' });

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder={placeholder} variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
