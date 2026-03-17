import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-center">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Simple Weather Checker</h1>
      <SearchBar onSearch={setCity} />
      <WeatherCard city={city} />
    </div>
  );
}

export default App;



