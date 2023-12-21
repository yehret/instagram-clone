import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;

  return (
    <Flex>
      {/* left sidebar */}
      {canRenderSidebar !== '/auth' ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* the whole content on the right */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
