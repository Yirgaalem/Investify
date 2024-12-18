'use client'
import styles from './investment.module.css';
import { currency } from '../../../../functions/CurrencyFormat';

export type investmentProps = {
  name: string;
  amount: number;
  type: string;
  // pnl: number;
  purchasePrice: number
}


export default function Investment(props: investmentProps) {
  const amount: number = props.amount;
  const type: string = props.type; let typeStyle: string = '';
  let name: string = '';
  let pnl: string = '';  let pnlStyle: string = '';


  // props.pnl > 0 ? 
  // (pnl = `+${currency.format(props.pnl)}`, pnlStyle = styles.positivePnL) 
  // : 
  // (pnl = `-${currency.format(Math.abs(props.pnl))}`, pnlStyle = styles.negativePnL);
  
  name = props.name;
  typeStyle = styles.cryptoType;

  if (props.type === 'Stock') {
    typeStyle = styles.stockType;
    props.name[0] === '$' ? name = props.name : name = `$${props.name}`
  } 

  return (
    <div className={styles.investmentContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={typeStyle}>{type}</div>
      <div className={pnlStyle}>{pnl}</div>
    </div>
  );
}