import styles from './investement.module.css';

export type investementProps = {
  name: string;
  amount: number;
  type: string;
  pnl: number;
}

export default function Investement(props: investementProps) {
  const amount: number = props.amount;
  const type: string = props.type;
  let name: string = '';
  let pnl: string = '';

  props.pnl > 0 ? pnl = `+$${props.pnl}` : pnl = `-$${Math.abs(props.pnl)}`;
  props.type === 'Stock' ? name = `$${props.name}` : name = `${props.name}`

  let typeStyle: string = '';
  type === 'Stock' ? typeStyle = styles.stockType : typeStyle = styles.cryptoType;

  let pnlStyle: string = '';
  props.pnl > 0 ? pnlStyle = styles.positivePnL : pnlStyle = styles.negativePnL

  return (
    <div className={styles.investementContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={typeStyle}>{type}</div>
      <div className={pnlStyle}>{pnl}</div>
    </div>
  );
}