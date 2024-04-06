import Image from 'next/image';
import styles from './FirstPage.module.css';
import dashboard from '../../../../public/images/investify-dashboard.png';
import portfolio from '../../../../public/images/investify-portfoio.png'
import { useRef } from 'react';
import Link from 'next/link';

// export const overviewRef = useRef(null);
// export const featuresRef = useRef(null);

export default function FirstPage() {
  


  return (
    <>
      {/* <div className={styles.header}>
        <button className={styles.headerContent} onClick={scrollToOverview}>Overview</button>
        <button className={styles.headerContent} onClick={scrollToFeatures}>Features</button>
      </div> */}
      <div className={styles.register}>
        <Link href={'/login'}>
          <button className={styles.login}>Login</button>
        </Link>
        <Link href={'/SignUp'}>
          <button className={styles.signup}>Sign Up</button>
        </Link>
      </div>
      
      <div className={styles.logo}>Investify</div>
      
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>We help manage your investments</h1>
      </div>
      
      <div className={styles.dashboardImageContainer}>
        <Image className={styles.dashboardImage} src={dashboard} alt='Dashboard Image'/>
      </div>
    </>
  );
}

