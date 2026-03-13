export default function WeatherCard() {
  return (
    <div className="p-8 bg-slate-100 rounded-xl flex flex-col items-center gap-2">
      <h2 className="text-4xl font-semibold text-slate-700 m-0 mb-4">City Name</h2>
      <p className="text-xl m-1">Temperature: °C</p>
      <p className="text-xl m-1">Condition: placeholder</p>
    </div>
  );
}
