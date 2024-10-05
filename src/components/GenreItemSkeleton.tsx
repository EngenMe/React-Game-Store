import { HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const GenreItemSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle size="32px" />
      <Skeleton height="20px" width="150px" />
    </HStack>
  );
};

export default GenreItemSkeleton;
