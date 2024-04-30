import Link from 'next/link';
import Image from 'next/image';
import rightArrow from '../../../../public/images/arrow-right-light.png'
import Investment from '../../dashboardComponents/portfolio/investment/page';
import { User } from '../../../functions/Context/UserContext';
import styles from './portfolioTab.module.css';

type portfolioTabProps = {
  user: User | undefined
}

export default function PortfolioTab(props: portfolioTabProps) {
  
  const stockArray = getStockInvestments(props.user);
  const cryptoArray = getCryptoInvestments(props.user);

  return (
    <div className={styles.portfolioContainer}>
  
      <div className={styles.titleContainer}>
        <div className={styles.portfolioTitle}>Portfolio</div>
        
        <Link href="/investment">
          <button className={styles.investment}>
            Add Investments <Image className={styles.rightArrow} src={rightArrow} alt='right-arrow'/>
          </button>
        </Link>
      </div>

      <div className={styles.categoriesContainer}>
        <div className={styles.name}>Name</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.type}>Type</div>
        <div className={styles.profitLoss}>P&L</div>
      </div>
  
      <div className={styles.investmentContainer}>
        {stockArray}
        {cryptoArray}
      </div>
    </div>
  );
}

export const getStockInvestments = (user: User | undefined) => {
  
  const stockArray: JSX.Element[] = [];

  user?.stock.map((stock) => {
    stockArray.push(<Investment name={stock.stockName} amount={stock.stockAmount} type='Stock' purchasePrice={stock.purchasePrice}/>);
  });

  return stockArray;
}

export const getCryptoInvestments = (user: User | undefined) => {

  const cryptoArray: JSX.Element[] = [];

  user?.crypto.map((crypto) => {
    cryptoArray.push(<Investment name={crypto.cryptoName} amount={crypto.cryptoAmount} type='Crypto' purchasePrice={crypto.purchasePrice}/>);
  });

  return cryptoArray;
}