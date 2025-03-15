import { useParams } from "react-router-dom";
import Country from "../components/country/country-page";
import { countryData } from "../data/countryData"; 

export default function CountryPage() {
  const { countryName } = useParams();
  const countryInfo = countryData[countryName?.toLowerCase()]; 


  if (!countryInfo) {
    return <h1>Country data not found</h1>; 
  }

  return <Country {...countryInfo} />;
}
