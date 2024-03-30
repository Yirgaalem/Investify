import Image from 'next/image';
import checkerboard from '../../../../public/images/checkerboard.png';
import greenArrow from '../../../../public/images/green-arrow.png';
import styles from './SecondPage.module.css';
import { overviewRef } from '../firstpage/page';

export default function SecondPage() {
  
  return (
    <div ref={overviewRef}>
    
      <div className={styles.pageTwoTitle}>Monitor your investments as they grow</div>

      <div className={styles.overviewContainer}>
        <div className={styles.overviewParagraph}>We let you easily watch and modify investments, track Profit/Loss and compare your different investments!</div>
      
          <div className={styles.phoneImage}>
            <Image className={styles.greenArrowImage} src={greenArrow} alt='Green Arrow Image'/>
            <div className={styles.phone}>
              <Image className={styles.checkerboardImage} src={checkerboard} alt='Phone App Image'/>
            </div>
      
        </div>
      </div>
    
    </div>
  );
}