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

export const getNewsError = (error: Error) => ({
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

export const getWeatherError = (error: Error) => ({
  type: types.GET_WEATHER_ERROR,
  payload: {
    error,
  },
});

export const deleteWeather = (id: number) => ({
  type: types.DELETE_WEATHER,
  payload: {
    id,
  },
});

export const deleteProfile = (url: string) => ({
  type: types.DELETE_PROFILE,
  payload: {
    url,
  },
});

export const addNews = (news: {}) => ({
  type: types.ADD_NEWS,
  payload: {
    news,
  },
});
