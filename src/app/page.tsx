import styles from './page.module.css';
import PageLayout from "@/Layouts/pageLayout/pageLayout";
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';
import ThirdPage from './components/ThirdPage/ThirdPage';


export default function Home() {
  return (
    <PageLayout>
      
      <div className={styles.landingPage}>
        <FirstPage/>     
        <SecondPage/>
        <ThirdPage/>
      </div>

    </PageLayout>
  );
}
