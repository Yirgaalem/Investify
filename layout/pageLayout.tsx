import React from 'react';
import Head from 'next/head';
import styles from './pageLayout.module.css'; // Import your CSS module for styles

const PageLayout = ({ children }: any) => {
  return (
    <div>
      {/* <Head/> */}
        <div className={styles.fadeBackground}></div>
          {children}
    </div>
  );
};

export default PageLayout;