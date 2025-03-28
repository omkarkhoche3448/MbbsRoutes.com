import { useParams } from "react-router-dom";
import Country from "../components/country/country-page";
import { countryData } from "../data/countryData"; 
import ComingSoon from "./ComingSoon";

export default function CountryPage() {
  const { countryName } = useParams();
  const countryInfo = countryData[countryName?.toLowerCase()]; 


  if (!countryInfo) {
    return <ComingSoon/>
  }

  return <Country {...countryInfo} />;
}
