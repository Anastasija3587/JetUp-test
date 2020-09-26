export interface State {
  info: {
    isAuth: boolean;
    news: [];
    weather: [];
    isLoading: boolean;
  };
}

export type singleWeather = {
  id: number;
  name: string;
  weather: [{ description: string }];
  main: { temp: number };
}
