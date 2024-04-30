'use client'
import PageLayout from '../../layout/pageLayout';
import CryptoForm from '../components/CryptoForm/page';
import StockForm from '../components/StockForm/page';
import styles from './investement.module.css';

const Investement = () => {
 
  return (
    <PageLayout>
      <div className={styles.formContainer}>
        <StockForm/>
        <CryptoForm/>
      </div>
    </PageLayout>
  );
}

export default Investement;