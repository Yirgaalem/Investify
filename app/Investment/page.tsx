'use client'
import PageLayout from '../../layout/pageLayout';
import CryptoForm from '../components/CryptoForm/page';
import StockForm from '../components/StockForm/page';
import Header from '../components/header/page';
import styles from './investment.module.css';

const Investment = () => {

  return (
    <PageLayout>
      <Header headerLeft='Dashboard' headerMiddle='Portfolio' headerRight='Charts'/>
      <div className={styles.Header}>Add Your Investments</div>
      <div className={styles.formContainer}>
        <StockForm/>
        <CryptoForm/>
      </div>
    </PageLayout>
  );
}

export default Investment;