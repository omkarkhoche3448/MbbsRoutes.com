import { ChevronRight } from "lucide-react";
const CountryCard = ({ country, onSelect }) => (
  <button
    onClick={() => onSelect(country)}
    className="group relative bg-white rounded-3xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-100"
  >
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
        <img
          src={`https://imgs.search.brave.com/Ckv7UJv6ilij8f3B-XkAIB02oWo4fs_i7G6JQTgf6FE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5Lzg2/LzM2MF9GXzYyMTk4/NjAwX3ZxN0RSUmI0/TGQ3U3R5N3AwNTdt/eWZzMGo2NUtBVTN3/LmpwZw`}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-left">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {country.name}
        </h3>
        <p className="text-sm text-gray-500">{country.nativeName}</p>
        <p className="text-xs text-gray-400 mt-1">{country.speakersCount}</p>
      </div>

      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
    </div>

    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
  </button>
);

export default CountryCard;
