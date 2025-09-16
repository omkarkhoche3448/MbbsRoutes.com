import { useParams } from "react-router-dom";
import University from "../components/University/university-page";
import { countryData } from "../data/countryData"; 
import ComingSoon from "./ComingSoon";

export default function UniversityPage() {
  const { countryName } = useParams();
  const countryInfo = countryData[countryName?.toLowerCase()]; 


  if (!countryInfo) {
    return <ComingSoon/> 
  }

  return <University {...countryInfo} />;
}
