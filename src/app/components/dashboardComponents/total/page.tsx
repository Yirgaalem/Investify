import styles from './total.module.css';
import { currency } from '@/app/page';

export type totalProps = {
  amount: number;
  pnl: number;
}

export default function Total(props: totalProps) {
  
  const amount: string = `${currency.format(props.amount)}`;
  let pnl: string = '';

  props.pnl > 0 ? pnl = `+${currency.format(props.pnl)}` : pnl = `-${currency.format(props.pnl)}`;

  let pnlStyle: string;
  props.pnl > 0 ? pnlStyle = styles.positive : pnlStyle = styles.negative;

  return (
    <div className={styles.totalContainer}> 
      <div className={styles.totalTitle}>Total</div>
      <div className={styles.totalAmount}>{amount}</div>
      <div className={pnlStyle}>{pnl}</div>
    </div>
  );
}