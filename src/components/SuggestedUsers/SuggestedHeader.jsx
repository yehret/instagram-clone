import { Avatar, Flex, Text, Button } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogout';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar cursor={'pointer'} size={'md'} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text cursor={'pointer'} fontSize={12} fontWeight={'bold'}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={'xs'}
        bg={'transparent'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        _hover={{ bg: 'transparent' }}
        isLoading={isLoggingOut}
        onClick={handleLogout}>
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
