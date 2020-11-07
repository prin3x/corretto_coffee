import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import UserProfile from '../pages/UserProfile/UserProfile.component';

const components = {
  signin: {
    url: '/signin',
    component: SignIn,
  },
  register: {
    url: '/register',
    component: Register,
  },
  userprofile: {
    url: '/profile',
    component: UserProfile,
  },
};

export default {
  guest: {
    allowedRoutes: [components.signin, components.register],
    redirect: '/',
  },
  member: {
    allowedRoutes: [components.userprofile],
    redirect: '/',
  },
};
