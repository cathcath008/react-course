import { Home, Organization, Experience } from '../pages';

const Routes = [
  {
    path: '/experience',
    component: Experience,
  },
  {
    path: '/organization',
    component: Organization,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Home,
  },
];

export default Routes;
