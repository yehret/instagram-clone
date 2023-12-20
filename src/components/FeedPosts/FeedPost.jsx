import { Box, Image } from '@chakra-ui/react';
import PostFooter from '../FeedPosts/PostFooter';
import PostHeader from '../FeedPosts/PostHeader';

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box>
        <Image src="/img1.png" alt="user profile pic" />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
