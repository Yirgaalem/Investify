import PageLayout from '@/Layouts/landingPageLayout/landingPageLayout';
import Header from '../components/header/page';
import styles from './dashboard.module.css';
import Total from '../components/total/page';
import Today from '../components/today/page';
import Portfolio from '../components/portfolio/page';
import Charts from '../components/charts/page';

export default function Dashboard() {

  return (
    <>
      <Header headerLeft='Portfolio' headerMiddle='Dashboard' headerRight='Charts'/>
      
      <PageLayout>
        <div className={styles.dashboardContent}>
          <div className={styles.top}>
            <Total/>
            <Today/>
          </div>
          
          <div className={styles.bottom}>
            <Portfolio/>
            <Charts/>
          </div>
        </div>
      </PageLayout>
    </>
  );
}