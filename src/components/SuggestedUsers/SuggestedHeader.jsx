import { Avatar, Flex, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SuggestedHeader = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="serge_the_frenzied" size={'md'} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={'bold'}>
          serge_the_frenzied
        </Text>
      </Flex>
      <Link
        to={'/auth'}
        as={RouterLink}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        style={{ textDecoration: 'none' }}
        cursor={'pointer'}
        _hover={{ color: 'white' }}>
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
