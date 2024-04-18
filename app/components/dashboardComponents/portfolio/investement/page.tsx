import styles from './investement.module.css';
import { currency } from '../../../../page';

export type investementProps = {
  name: string;
  amount: number;
  type: string;
  pnl: number;
}

export default function Investement(props: investementProps) {
  const amount: number = props.amount;
  const type: string = props.type; let typeStyle: string = '';
  let name: string = '';
  let pnl: string = '';  let pnlStyle: string = '';


  props.pnl > 0 ? 
  (pnl = `+${currency.format(props.pnl)}`, pnlStyle = styles.positivePnL) 
  : 
  (pnl = `-${currency.format(Math.abs(props.pnl))}`, pnlStyle = styles.negativePnL);
  
  props.type === 'Stock' ?
  (name = `$${(props.name)}`, typeStyle = styles.stockType)
  :
  (name = `${props.name}`, typeStyle = styles.cryptoType);

  
  return (
    <div className={styles.investementContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={typeStyle}>{type}</div>
      <div className={pnlStyle}>{pnl}</div>
    </div>
  );
}