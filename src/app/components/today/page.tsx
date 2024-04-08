import styles from './today.module.css';

export type todayProps = {
  total: number;
  stocks: number;
  crypto: number;
}

export default function Today(props: todayProps) {
  /* 
    When I acc pull the information from DB, have "Total" + {amount}
    If the amount is > 0 add a '+' beofre the amount and be green colour
  */

  let total: string; let totalStyle: string;
  let stocks: string; let stocksStyle: string;
  let crypto: string; let cryptoStyle: string;


  props.total > 0 ? 
  (total = `+$${props.total}`, totalStyle = styles.totalPositive) 
  : 
  (total = `-$${Math.abs(props.total)}`,totalStyle = styles.totalNegative);

  props.stocks > 0 ? 
  (stocks = `+$${props.stocks}`, stocksStyle = styles.stocksPositive) 
  : 
  (stocks = `-$${Math.abs(props.stocks)}`, stocksStyle = styles.stocksNegative);
  
  props.crypto > 0 ? 
  (crypto = `+$${props.crypto}`, cryptoStyle = styles.cryptoPositive) 
  : 
  (crypto = `-$${Math.abs(props.crypto)}`, cryptoStyle = styles.cryptoNegative);
  
  return (
    <div className={styles.todayContainer}> 
      <div className={styles.titles}>
        <div className={styles.todayTitle}>Today</div>

        <div className={styles.amount}>
          <div className={styles.totalTitle}>Total:
            <div className={styles.totalStyle}>
              {total}
            </div>
          </div>
          
          <div className={styles.stocksTitle}>Stocks:
            <div className={styles.stocksStyle}>
              {stocks}
            </div>
          </div>
          
          <div className={styles.cryptoTitle}>Crypto:
            <div className={styles.cryptoStyle}>
              {crypto}
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}