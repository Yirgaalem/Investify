import styles from './total.module.css';

export default function Total() {
  return (
    <div className={styles.totalContainer}> 
      <div className={styles.totalTitle}>Total</div>
      <div className={styles.totalAmount}>$103,030.90</div>
      <div className={styles.profitLoss}>+ $28,019.90</div>
    </div>
  );
}