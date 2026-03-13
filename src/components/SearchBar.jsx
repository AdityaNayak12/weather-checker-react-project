export default function SearchBar() {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <input 
        type="text" 
        placeholder="Enter city name..." 
        className="w-[60%] px-4 py-3 text-base border border-gray-300 rounded-md outline-none focus:border-blue-500 transition-colors"
      />
      <button className="px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer border-none shadow-sm">
        Search
      </button>
    </div>
  );
}
