'use client'
import Investement from './investement/page';
import styles from './portfolio.module.css';
import rightArrow from '../../../../public/images/arrow-right-light.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  
  return (
    <div className={styles.portfolioContainer}>
      
      <div className={styles.titleContainer}>
        <div className={styles.portfolioTitle}>Portfolio</div>
        
        <Link href="/portfolio">
          <button className={styles.investements}>
            All Investements <Image className={styles.rightArrow} src={rightArrow} alt='right-arrow'/>
          </button>
        </Link>
      
      </div>

      <div className={styles.categoriesContainer}>
        <div className={styles.name}>Name</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.type}>Type</div>
        <div className={styles.profitLoss}>P&L</div>
      </div>

      <Investement name='Bitcoin' amount={0.5} type='Crypto' pnl={-9.99}/>
      <Investement name='TSLA' amount={20} type='Stock' pnl={205.99}/>
      <Investement name='AAPL' amount={100} type='Stock' pnl={328.99}/>
    </div >
  );
}