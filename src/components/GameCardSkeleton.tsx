import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card
      width={{ sm: '300px', md: '350px', lg: '290px', xl: '240px' }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
