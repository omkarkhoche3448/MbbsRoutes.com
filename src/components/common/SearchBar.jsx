
import {Search, ChevronRight, X} from "lucide-react";
const SearchBar = ({ value, onChange }) => (
  <div className="relative mb-6">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      type="text"
      placeholder="Search countries and languages..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/50 border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all duration-300 outline-none text-lg"
    />
  </div>
);
export default SearchBar;
