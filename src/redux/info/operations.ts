import * as actions from '../info/actions';
import { getNews, getWeather } from '../../services/api';

export interface Dynamic {
  [key: string]: { articles?: any };
}

export const fetchNews = () => (dispatch: any): void => {
  dispatch(actions.getNewsStart());
  getNews()
    .then((res: Dynamic) => dispatch(actions.getNewsSuccess(res.data.articles)))
    .catch(err => dispatch(actions.getNewsError(err)));
};

export const fetchWeather = (city: string) => (dispatch: any): void => {
  dispatch(actions.getWeatherStart());
  getWeather(city)
    .then((res: Dynamic) => dispatch(actions.getWeatherSuccess(res.data)))
    .catch(err => {
      alert('There is no such city');
      dispatch(actions.getWeatherError(err));
    });
};
