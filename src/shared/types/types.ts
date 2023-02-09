export type Weather = {
  main: {
    temp: number;
  };
};

export type SelectItem = {
  value: string;
  label: string;
}

export type Geo = {
  lat: string;
  lon: string;
  city: string;
}

export enum RequestStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export enum WeatherPeriods {
  DAY = 'На день',
  WEEK = 'На неделю',
}

export interface CardItem {
  title: string;
  item_info:string;
  icon_id: string;
  temp_day: number;
  temp_night: string;
  desc: string;
  pressure: string;
  rain: any;
  wind_speed: string;
  wind_dir:string;
  time: string;
  city: string;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}