import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreItemSkeleton from './GenreItemSkeleton';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const skeletons = Array.from({ length: 15 }, (_, index) => index + 1);
  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map(skeleton => (
          <ListItem key={skeleton}>
            <GenreItemSkeleton />
          </ListItem>
        ))}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
