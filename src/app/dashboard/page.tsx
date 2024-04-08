import PageLayout from '@/Layouts/landingPageLayout/landingPageLayout';
import Header from '../components/header/page';
import styles from './dashboard.module.css';
import Total from '../components/total/page';
import Today from '../components/today/page';
import Portfolio from '../components/portfolio/page';
import Charts from '../components/charts/page';

export default function Dashboard() {
  // const dashboard: JSX.Element = (
  //   <div className={styles.headerOptions}>
  //     <button className={styles.left}>Portfolio</button>
  //     <button className={styles.middle}>Dashboard</button>
  //     <button className={styles.right}>Charts</button>
  //   </div>
  // );

  // const portfolio: JSX.Element = (
  //   <div className={styles.headerOptions}>
  //     <div className={styles.left}>Dashboard</div>
  //     <div className={styles.middle}>Portfolio</div>
  //     <div className={styles.right}>Charts</div>
  //   </div>
  // );

  // const charts: JSX.Element = (
  //   <div className={styles.headerOptions}>
  //     <div className={styles.left}>Dashboard</div>
  //     <div className={styles.middle}>Charts</div>
  //     <div className={styles.right}>Portfolio</div>
  //   </div>
  // );

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