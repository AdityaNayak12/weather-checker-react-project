import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); // metric = °C

  useEffect(() => {
    if (!city) {
      setWeatherData(null);
      setError('');
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      setWeatherData(null);
      setTemperature(null);
      setCondition('');
      setIcon('');

      try {
        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('City not found. Please check the city name.');
          }
          throw new Error('Failed to fetch weather data. Please try again.');
        }

        const data = await response.json();

        setTemperature(data.main.temp);
        setCondition(data.weather[0].description);
        setIcon(data.weather[0].icon);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <p className="text-blue-500 text-lg my-4">Loading weather...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-lg my-4">{error}</p>;
  }

  if (!weatherData) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="flex flex-col items-center">
      <div className="p-8 bg-slate-100 rounded-xl flex flex-col items-center gap-2 w-full">
        <h2 className="text-4xl font-semibold text-slate-700 m-0 mb-2">{weatherData.name}</h2>
        <img src={iconUrl} alt={condition} className="w-24 h-24" />
        <p className="text-3xl font-bold m-1">{Math.round(temperature)}{unitSymbol}</p>
        <p className="text-xl capitalize text-slate-600 m-1">{condition}</p>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Searched for: <strong>{weatherData.name}</strong>
      </p>
    </div>
  );
}

