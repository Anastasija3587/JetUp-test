import MainPage from '../page/Main/index';
import LoginPage from '../page/Login/index';
import WeatherPage from '../page/Weather/index';
import NewsPage from '../page/News/index';
import ProfilePage from '../page/Profile/index';

export default {
  MAIN_PAGE: {
    path: '/',
    component: MainPage,
  },
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  NEWS_PAGE: {
    path: '/news',
    component: NewsPage,
  },
  WEATHER_PAGE: {
    path: '/weather',
    component: WeatherPage,
  },
  PROFILE_PAGE: {
    path: '/profile',
    component: ProfilePage,
  },
};
