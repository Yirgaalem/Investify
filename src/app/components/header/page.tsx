import styles from './header.module.css';
import redd from './../../../../public/images/sexyy-redd.jpg'
import Image from 'next/image';
import Link from 'next/link';

export type headerProps = {
  headerLeft: string;
  headerMiddle: string;
  headerRight: string;
};

export default function Header(props: headerProps) {
  
  const headerContent: JSX.Element = (
    <div className={styles.headerOptions}>
      <Link href={`/${props.headerLeft.toLowerCase()}`}>
        <button className={styles.left}>{props.headerLeft}</button>
      </Link>
      
      <button className={styles.middle}>{props.headerMiddle}</button>

      <Link href={`/${props.headerRight.toLowerCase()}`}>
        <button className={styles.right}>{props.headerRight}</button>
      </Link>
    </div>
  );

  return (
    <div className={styles.header}>
      <div className={styles.investify}>Investify</div>
  
      {headerContent}

      <div className={styles.userContainer}>
        <Image className={styles.userImage} src={redd} alt='sexyy redd'/> 
        <div className={styles.userName}>Sexyy Redd</div>
      </div>
    
    </div>
  );
}
