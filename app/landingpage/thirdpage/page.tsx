import styles from './ThirdPage.module.css';

export default function ThirdPage() {
  return (

    <div>
      <div className={styles.pageThreeTitle}>We Make Your Investments Organized</div>
      <div className={styles.rectangleContianer}>
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.rectangle}></div>
      </div>

      <div className={styles.copyright}>© Nahor Yirgaalem, 2024</div>
    </div>
  );
}