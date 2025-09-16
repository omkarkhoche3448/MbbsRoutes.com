import { HeroBanner } from "../country/hero-banner";
import { Breadcrumb } from "../country/breadcrumb";
import { TabNavigation } from "../country/tab-navigation";
import { CTABanner } from "../country/cta-banner";
import { useModal } from "../../contexts/ModalContext";
import Aeroplane from "../../assets/aeroplane.svg";
import FAQSection from "../common/FAQSection";
import UniversityInfoSection from "./country-university-section"

export default function University(props) {
  const {
    country,
    heroImage,
    universityTypes,
    universitiesByType
  } = props;

  const { openModal } = useModal();

  // Breadcrumb items
  const breadcrumbItems = [
    {
      label: country,
      href: `/country/${country.toLowerCase()}`,
      isLast: false,
    },
    {
      label: "Universities",
      href: `/${country.toLowerCase()}/universities`,
      isLast: true,
    },
  ];

  // Tab items
  const tabItems = [
    {
      label: "About",
      href: `/country/${country.toLowerCase()}/`,
      isActive: true,
    },
    {
      label: "Universities",
      href: `/country/${country.toLowerCase()}/universities`,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white w-full">
        {/* Hero Banner */}
        <HeroBanner
          title={`Study in ${country}`}
          backgroundImage={heroImage}
          buttonText="Get Started"
          setIsModalOpen={openModal}
        />

        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Tab Navigation */}
          <TabNavigation tabs={tabItems} />

          {/* Main Content */}
            <UniversityInfoSection
              universityTypes={universityTypes}
              universitiesByType={universitiesByType}
              country={country}
            />

          {/* CTA Banner */}
          <CTABanner
            title={`Begin your journey to Study in ${country} with MBBSRoutes `}
            buttonText="Get Started"
            buttonLink="/"
            image={Aeroplane}
            setIsModalOpen={openModal}
          />

          <div className="mt-12">
            <FAQSection />
          </div>
        </div>
      </div>
    </>
  );
}
