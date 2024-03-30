import FirstPage from "./firstpage/page";
import SecondPage from "./secondpage/page";
import ThirdPage from "./thirdpage/page";
import PageLayout from "@/Layouts/landingPageLayout/landingPageLayout";

export default function LandingPage() {
  return (
    <PageLayout>
      <FirstPage/>     
      <SecondPage/>
      <ThirdPage/>
    </PageLayout>
  );
}