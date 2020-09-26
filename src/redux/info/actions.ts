import types from './types';

export const login = () => {
  return {
    type: types.LOGIN,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

export const getNewsStart = () => ({
  type: types.GET_NEWS_START,
});

export const getNewsSuccess = (news: []) => ({
  type: types.GET_NEWS_SUCCESS,
  payload: {
    news,
  },
});

export const getNewsError = (error: any) => ({
  type: types.GET_NEWS_ERROR,
  payload: {
    error,
  },
});

export const getWeatherStart = () => ({
  type: types.GET_WEATHER_START,
});

export const getWeatherSuccess = (weather: {}) => ({
  type: types.GET_WEATHER_SUCCESS,
  payload: {
    weather,
  },
});

export const getWeatherError = (error: any) => ({
  type: types.GET_WEATHER_ERROR,
  payload: {
    error,
  },
});

export const deleteWeather = (newWeather: []) => ({
  type: types.DELETE_WEATHER,
  payload: {
    newWeather,
  }
})
