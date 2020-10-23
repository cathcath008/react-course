import { Home, Organization, Experience, Login, Chat } from '../pages';

const routes = [
  {
    path: '/chat',
    component: Chat,
    isPublic: false,
  },
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/organization',
    component: Organization,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
