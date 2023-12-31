import { Box, Flex, Spinner } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import Navbar from '../../components/Navbar/Navbar';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loading && pathname !== '/auth';

  const checkUserIsAuth = !user && loading;

  if (checkUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDirection={canRenderNavbar ? 'column' : 'row'}>
      {/* left sidebar */}
      {canRenderSidebar ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* navbar */}
      {canRenderNavbar ? <Navbar /> : null}
      {/* the whole content on the right */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }} mx={'auto'}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex flexDirection="column" h="100vh" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  );
};
