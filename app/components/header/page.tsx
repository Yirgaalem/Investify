'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import redd from './../../../public/images/sexyy-redd.jpg'
import GetUser from '../../functions/GetUser';
import { User } from '../../functions/Context/UserContext';
import styles from './header.module.css';

export type headerProps = {
  headerLeft: string;
  headerMiddle: string;
  headerRight: string;
};

export default function Header(props: headerProps) {
  const user: User | undefined = GetUser();
  const userName = user?.name;
  
  const headerContent: JSX.Element = (
    <div className={styles.headerOptions}>
      <Link href={`/${props.headerLeft.toLowerCase()}`}>
        <button className={styles.left}>{props.headerLeft}</button>
      </Link>

      <Link href={`/${props.headerMiddle.toLowerCase()}`}>
        <button className={styles.middle}>{props.headerMiddle}</button>
      </Link>
      
      <Link href={`/${props.headerRight.toLowerCase()}`}>
        <button className={styles.right}>{props.headerRight}</button>
      </Link>
    </div>
  );

  const [drop, setDrop] = useState<Boolean>(false);

  return (
    <div className={styles.header}>
      <div className={styles.investify}>Investify</div>
    
      {headerContent}
      <div className={styles.userContainer}>{/* Make this absolute so it doesn't effect position of header components */}
        <div className={styles.userName}>{ userName }</div>
        <Image className={styles.userImage} src={redd} alt='sexyy redd' onClick={() => setDrop(!drop)}/> 
        {drop && <DropDownMenu/>}
      </div>
    
    </div>
  );
}

const DropDownMenu = () => {
  return (
    <div className={styles.dropDown}>
      <ul className='flex flex-col gap-4'>
        <Link href="/api/auth/signout?callbackUrl=/">
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}
