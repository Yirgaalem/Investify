import styles from './charts.module.css';
import Link from 'next/link';
import Image from 'next/image';
import rightArrow from '../../../../../public/images/arrow-right-light.png';

export default function Charts() {
  
  return (
    <div className={styles.chartsContianer}>
      <div className={styles.titleContainer}>
        
        <div className={styles.chartsTitle}>Charts</div>
        
        <Link href="/charts">
          <button className={styles.allCharts}>
            All Charts <Image className={styles.rightArrow} src={rightArrow} alt='right-arrow'/>
          </button>
        </Link>

      </div>
    </div>
  );
}