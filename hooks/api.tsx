type Weather = {
  description: string;
  icon: string;
  main: string;
};

type WeatherInfo = {
  dt: number;
  temp: number;
  weather: Weather[];
};

export type GetWeaterRes = {
  data: WeatherInfo[];
};

export const getWeather = async (): Promise<any> => {
  const data = await fetch("http://localhost:3001/data", { method: "GET" });
  const json = await data.json();
  return json;
};

//http://localhost:3001/data
