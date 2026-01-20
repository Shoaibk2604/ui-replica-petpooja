import DashboardBanner from "./DashboardBanner";
import ProductivitySection from "./ProductivitySection";
import CollaborationSection from "./CollaborationSection";
import LifeEasySection from "./LifeEasySection";
import TaskMobileSliderSection from "./TaskMobileSliderSection";
import IndustrySection from "./IndustrySection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashboardBanner />
      <ProductivitySection />
      <CollaborationSection />
      <LifeEasySection />
      <TaskMobileSliderSection />
      <IndustrySection />
      <WhyChooseUsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Dashboard;
