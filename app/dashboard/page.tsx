'use client'
import PageLayout from '../../layout/pageLayout';
import Header from '../components/header/page';
import styles from './dashboard.module.css';
import Total from '../components/dashboardComponents/total/page';
import Today from '../components/dashboardComponents/today/page';
import Portfolio from '../components/dashboardComponents/portfolio/page';
import Charts from '../components/dashboardComponents/charts/page';
import { useUserContext } from '../functions/Context/UserContext';

const Dashboard = () => {

  const {user, setUser} = useUserContext();
  
  // const stocks: number = Number(user[0].stocks.amount);
  // const crypto: number = Number(user[0].crypto.amount);

  const stocks: number = Number(user[0]?.stock);
  const crypto: number = Number(user[0]?.crypto);
  /*
    Both Stocks and Crypto have 3 properites
      1. Stock Name
      2. Amount
      3. Purchase Price

    Total:
      -> For the amount simply add stocks amount and cryptoamount
      -> For the PnL, we must take the purchased price of each and subtract it from the current value of the stock or crypto 
          -> (Current Price - Purchase Price)
    
    Today
      Generally for this maybe find the price that it closed at previous day and current price of all stocks and cryptos
      Find stocks and crypto first then add the two. 
  
  */
  // const amount: number = stocks + crypto;


  return (
    <PageLayout>
      <Header headerLeft='Portfolio' headerMiddle='Dashboard' headerRight='Charts'/>
        
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
  );
}

export default Dashboard;