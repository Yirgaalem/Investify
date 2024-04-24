import React from 'react';
import styles from './pageLayout.module.css'; 

const PageLayout = ({ children }: any) => {
  return (
    <div>
      <div className={styles.fadeBackground}></div>
        {children}
    </div>
  );
};

export default PageLayout;