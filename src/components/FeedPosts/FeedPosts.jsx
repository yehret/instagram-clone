import { Container } from '@chakra-ui/react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  return (
    <Container maxW={'container.sm'} py={10} px={3}>
      <FeedPost img="img1.png" username={'serge_the_frenzied'} avatar="/img1.png" />
      <FeedPost img="img2.png" username={'johndoe'} avatar="/img2.png" />
      <FeedPost img="img3.png" username={'janedoe'} avatar="/img3.png" />
      <FeedPost img="img4.png" username={'johnpork'} avatar="/img4.png" />
    </Container>
  );
};

export default FeedPosts;
