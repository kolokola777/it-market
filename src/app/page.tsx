import { CompaniesSection } from "./_components/company-section"
import HeroSection from "./_components/hero-section"
import OrdersSection from "./_components/orders-section"
import { RegisterSection } from "./_components/register-section"
import SpecialistsSection from "./_components/specialist-section"
import VacanciesSection from "./_components/vacancies-section"

const HomePage = () => {
  return <>
    <HeroSection />

    <CompaniesSection />

    <SpecialistsSection />

    <VacanciesSection />

    <OrdersSection />

    <RegisterSection />
  </>
}

export default HomePage