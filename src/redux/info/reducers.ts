import { combineReducers } from 'redux';
import types from './types';

interface Action {
  type: string;
  payload?: any;
}

const news = (state = [], action: Action) => {
  switch (action.type) {
    case types.GET_NEWS_SUCCESS:
      return action.payload.news;
    default:
      return state;
  }
};

const weather = (state = [], action: Action) => {
  switch (action.type) {
    case types.GET_WEATHER_SUCCESS:
      return [...state, action.payload.weather];
    case types.DELETE_WEATHER:
      return action.payload.newWeather;
    default:
      return state;
  }
};

const isAuth = (state = false, action: Action) => {
  switch (action.type) {
    case types.LOGIN:
      return true;
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
};

const isLoading = (state = false, action: Action) => {
  switch (action.type) {
    case types.GET_NEWS_START:
    case types.GET_WEATHER_START:
      return true;
    case types.GET_NEWS_SUCCESS:
    case types.GET_NEWS_ERROR:
    case types.GET_WEATHER_SUCCESS:
    case types.GET_WEATHER_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isAuth,
  news,
  weather,
  isLoading,
});
