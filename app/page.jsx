import FirstPage from "./landingpage/firstpage/page";
import SecondPage from "./landingpage/secondpage/page";
import ThirdPage from "./landingpage/thirdpage/page";
import PageLayout from '../layout/pageLayout';
import options from "./api/auth/[...nextauth]/options";
import { getServerSession }  from 'next-auth';
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(options);
  if (session) redirect('/dashboard');
  
  return (
    <PageLayout>
      <FirstPage/>     
      <SecondPage/>
      <ThirdPage/>
    </PageLayout>
  );
}