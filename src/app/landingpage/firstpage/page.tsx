import Image from 'next/image';
import styles from './FirstPage.module.css';
import dashboard from '../../../../public/images/investify-dashboard.png';
import portfolio from '../../../../public/images/investify-portfoio.png'
import Link from 'next/link';

export default function FirstPage() {

  return (
    <>
      <div className={styles.register}>
      

        <Link href={'/register'}>
          <button className={styles.login}>Login</button>
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

