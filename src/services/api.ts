import axios from 'axios';

export const getNews = (): Promise<any> =>
  axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a1bb630f5084ccdbb160829f159a759',
  );

export const getWeather = (city: string): Promise<any> =>
  axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=420fd3b3bb9261bcd33a2d568382f934`,
  );
