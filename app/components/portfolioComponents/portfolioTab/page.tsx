import styles from './portfolioTab.module.css';
import Investement from '../../dashboardComponents/portfolio/investement/page';
import GetUser from '../../../functions/GetUser';
import { User } from '../../../functions/Context/UserContext';

type portfolioTabProps = {
  user: User | undefined
}

export default function PortfolioTab(props: portfolioTabProps) {

  const user: User | undefined = props.user; 

  const stockArray: JSX.Element[] = [];
  const cryptoArray: JSX.Element[] = [];

  user?.stock.map((stock) => {
    stockArray.push(<Investement name={stock.stockName} amount={stock.stockAmount} type='Stock' purchasePrice={stock.purchasePrice}/>);
  });

  user?.crypto.map((crypto) => {
    cryptoArray.push(<Investement name={crypto.cryptoName} amount={crypto.cryptoAmount} type='Crypto' purchasePrice={crypto.purchasePrice}/>);
  });
  
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
        {stockArray}
        {cryptoArray}
        {/* <Investement name='Bitcoin' amount={0.5} type='Crypto' pnl={-9.99}/>
        <Investement name='TSLA' amount={20} type='Stock' pnl={205.99}/>
        <Investement name='AAPL' amount={100} type='Stock' pnl={328.99}/>
        <Investement name='Ethereum' amount={10} type='Crypto' pnl={1028.99}/>
        <Investement name='NVDA' amount={30} type='Stock' pnl={1128.99}/>
        <Investement name='Dogecoin' amount={32} type='Crypto' pnl={-1328.99}/>
        <Investement name='Dogecoin' amount={32} type='Crypto' pnl={-1328.99}/> */}
      </div>
      
    </div>
  );
}
