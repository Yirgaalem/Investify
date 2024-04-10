import styles from './portfolioTab.module.css';
import Investement from '../../dashboardComponents/portfolio/investement/page';

export default function PortfolioTab() {
  
  return (
    <div className={styles.portfolioContainer}>
      
      <div className={styles.portfolioTitle}>Portfolio</div>

      <div className={styles.categoriesContainer}>
        <div className={styles.name}>Name</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.type}>Type</div>
        <div className={styles.profitLoss}>P&L</div>
      </div>
  
      <div className={styles.investementContainer}>
        <Investement name='Bitcoin' amount={0.5} type='Crypto' pnl={-9.99}/>
        <Investement name='TSLA' amount={20} type='Stock' pnl={205.99}/>
        <Investement name='AAPL' amount={100} type='Stock' pnl={328.99}/>
        <Investement name='Ethereum' amount={10} type='Crypto' pnl={1028.99}/>
        <Investement name='NVDA' amount={30} type='Stock' pnl={1128.99}/>
        <Investement name='Dogecoin' amount={32} type='Crypto' pnl={-1328.99}/>
        <Investement name='Dogecoin' amount={32} type='Crypto' pnl={-1328.99}/>
      </div>
      
    </div>
  );
}