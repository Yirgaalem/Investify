import styles from './ThirdPage.module.css';
import { featuresRef } from '../firstpage/page';

export default function ThirdPage() {
  return (

    <div ref={featuresRef}>
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