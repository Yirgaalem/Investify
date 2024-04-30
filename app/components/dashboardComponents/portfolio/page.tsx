'use client'

import styles from './portfolio.module.css';
import rightArrow from '../../../../public/images/arrow-right-light.png';
import Image from 'next/image';
import Link from 'next/link';
import { getCryptoInvestments, getStockInvestments } from '../../../components/portfolioComponents/portfolioTab/page';
import { User } from '../../../functions/Context/UserContext';

type portfolioProps = {
  user: User | undefined
}

export default function Portfolio(props: portfolioProps) {
  const stockArray: JSX.Element[] = getStockInvestments(props.user);
  const cryptoArray: JSX.Element[] = getCryptoInvestments(props.user);

  return (
    <div className={styles.portfolioContainer}>
      
      <div className={styles.titleContainer}>
        <div className={styles.portfolioTitle}>Portfolio</div>
        
        <Link href="/portfolio">
          <button className={styles.investment}>
            All Investments <Image className={styles.rightArrow} src={rightArrow} alt='right-arrow'/>
          </button>
        </Link>
      
      </div>

      <div className={styles.categoriesContainer}>
        <div className={styles.name}>Name</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.type}>Type</div>
        <div className={styles.profitLoss}>P&L</div>
      </div>

      {stockArray}
      {cryptoArray}
    </div >
  );
}