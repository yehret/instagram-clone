import { Link, Box, Flex, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name="Michael Jackson" followers={1392} avatar="https://bit.ly/dan-abramov" />
      <SuggestedUser name="Ryan Gosling" followers={567} avatar="https://bit.ly/ryan-florence" />
      <SuggestedUser name="Christian Bale" followers={759} avatar="https://bit.ly/code-beast" />

      <Box alignSelf={'start'} fontSize={12} color={'gray.500'} mt={5}>
        © 2023 Built By{' '}
        <Link
          href="https://github.com/yehret/instagram-clone"
          target="_blank"
          color="blue.500"
          fontSize={14}>
          Serge
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
