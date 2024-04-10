import PageLayout from '@/Layouts/landingPageLayout/landingPageLayout';
import Header from '../components/header/page';
import styles from './dashboard.module.css';
import Total from '../components/dashboardComponents/total/page';
import Today from '../components/dashboardComponents/today/page';
import Portfolio from '../components/dashboardComponents/portfolio/page';
import Charts from '../components/dashboardComponents/charts/page';

export default function Dashboard() {
  
  return (
    <>
      <Header headerLeft='Portfolio' headerMiddle='Dashboard' headerRight='Charts'/>
      
      <PageLayout>
        <div className={styles.dashboardContent}>
          <div className={styles.top}>
            <Total amount={103030.90} pnl={28019.90}/>
            <Today total={3832.12} stocks={4832.12} crypto={-1000.00}/>
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