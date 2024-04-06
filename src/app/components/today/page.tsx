import styles from './today.module.css';

export default function Today() {
  /* 
    When I acc pull the information from DB, have "Total" + {amount}
    If the amount is > 0 add a '+' beofre the amount and be green colour
  */
  const profitLoss: string = '+$3832.12';
  const stocks: string = '+$4832.12';
  const crypto: string = '-$1000.00';

  return (
    <div className={styles.todayContainer}> 
      <div className={styles.titles}>
        <div className={styles.todayTitle}>Today</div>

        <div className={styles.totalTitle}>Total:
          
        </div>
        
        <div className={styles.stocksTitle}>Stocks:
          
        </div>
        
        <div className={styles.cryptoTitle}>Crypto:
          
        </div>
      </div>
      <div className={styles.amounts}>
        <div className={styles.totalAmount}>
          {profitLoss}
        </div>
        <div className={styles.stocksAmount}>
          {stocks}
        </div>
        <div className={styles.cryptoAmount}>
          {crypto}
        </div>
      </div>

    </div>
  );
}