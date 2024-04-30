'use client'
import PageLayout from '../../layout/pageLayout';
import Header from '../components/header/page';
import styles from './dashboard.module.css';
import Total from '../components/dashboardComponents/total/page';
import Today from '../components/dashboardComponents/today/page';
import Portfolio from '../components/dashboardComponents/portfolio/page';
import Charts from '../components/dashboardComponents/charts/page';
import GetUser from '../functions/GetUser';
import { User } from '../functions/Context/UserContext';

const Dashboard = () => {

  const user: User | undefined = GetUser(); 
  
  let stockPurchaseAmount: number = 0;
  user?.stock.map((stock) => {
    stockPurchaseAmount += (stock.stockAmount * stock.stockPurchasePrice);
  });

  let cryptoPurchaseAmount: number = 0;
  // user?.crypto.map((crypto) => {
  //   cryptoPurchaseAmount += (crypto.cryptoAmount * crypto.cryptoPurchasePrice);
  // });
  console.log(user)
  const totalAmount: number = stockPurchaseAmount + cryptoPurchaseAmount;

  /*
   *  Need a real time stock and crypto price API. Will take the (stockAmount * the api response) for total amount
   */

  /*
    * TOTAL TAB 
      -> Map thru the user.stock => Add up each amount => set it to total stock amount 
      -> Either create new attribute which is total profit updating every day or something or
         Total Up or Down on current holdings. To do this, take:
         (purchase price of Stock - current stock price) * amount 
    * TODAY TAB
      -> Total is stock (purchasePrice - open price) * amount + crypto (purchasePrice - open price) * amount
      -> Before doing so we just determine Stock PnL and Crypto PnL for the day
   */

  
  /*
    Both Stocks and Crypto have 3 properites
      1. Stock Name
      2. Amount
      3. Purchase Price

    Total:
      -> For the amount simply add stocks amount and crypto amount
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
            <Total amount={totalAmount} pnl={28019.90}/>
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