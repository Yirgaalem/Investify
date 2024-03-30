import React from 'react';
import Head from 'next/head';
import styles from './landingPageLayout.module.css'; // Import your CSS module for styles

const PageLayout = ({ children }: any) => {
  return (
    <div>
      <Head>
        {/* Add any meta tags or page-specific head content */}
      </Head>
      {/* <body> */}
        <div className={styles.fadeBackground}></div>
          {children}
        {/* </body> */}
    </div>
  );
};

export default PageLayout;