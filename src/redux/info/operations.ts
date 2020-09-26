import * as actions from '../info/actions';
import { getNews, getWeather } from '../../services/api';

export interface Dynamic {
  [key: string]: string | object;
}

export const fetchNews = () => (dispatch: any): void => {
  dispatch(actions.getNewsStart());
  getNews()
    .then((res: any) => dispatch(actions.getNewsSuccess(res.data.articles)))
    .catch(err => dispatch(actions.getNewsError(err)));
};

export const fetchWeather = (city: string) => (dispatch: any): void => {
  dispatch(actions.getWeatherStart());
  getWeather(city)
    .then((res: any) => dispatch(actions.getWeatherSuccess(res.data)))
    .catch(err => {
      alert("There is no such city");
      dispatch(actions.getWeatherError(err));
    })
};
