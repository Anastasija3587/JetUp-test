export interface State {
  info: {
    isAuth: boolean;
    news: [];
    weather: [];
    profile: [];
    isLoading: boolean;
  };
}

export type singleWeather = {
  id: number;
  name: string;
  weather: [{ description: string }];
  main: { temp: number };
};

export type singleNews = {
  url: string;
  urlToImage: string;
  author: string;
  content: string;
};

export interface Action {
  type: string;
  payload?: any;
}
