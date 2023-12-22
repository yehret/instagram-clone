import CreatePost from './CreatePost';
import Home from './Home';
import Notifications from './Notifications';
import ProfileLink from './ProfileLink';
import Search from './Search';

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;

// const sidebarItems = [
//    {
//      icon: <AiFillHome size={25} />,
//      text: 'Home',
//      link: '/',
//    },
//    {
//      icon: <SearchLogo size={25} />,
//      text: 'Search',
//    },
//    {
//      icon: <NotificationsLogo size={25} />,
//      text: 'Notifications',
//    },
//    {
//      icon: <CreatePostLogo size={25} />,
//      text: 'Create',
//    },
//    {
//      icon: <Avatar size={'sm'} name={'John Doe'} src="/profilepic.png" />,
//      text: 'Profile',
//      link: '/profile',
//    },
//  ];
