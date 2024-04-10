import FirstPage from "./landingpage/firstpage/page";
import SecondPage from "./landingpage/secondpage/page";
import ThirdPage from "./landingpage/thirdpage/page";
import PageLayout from "@/Layouts/landingPageLayout/landingPageLayout";

export const currency = new Intl.NumberFormat('en-US',  {
  style:'currency',
  currency: 'USD',
});

export default function Home() {
  
  return (
    <PageLayout>
      <FirstPage/>     
      <SecondPage/>
      <ThirdPage/>
    </PageLayout>
  );
}
