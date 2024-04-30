'use client'
import Header from '../components/header/page';
import PortfolioTab from '../components/portfolioComponents/portfolioTab/page';
import Breakdown from '../components/portfolioComponents/breakdown/page';
import styles from './portfolio.module.css';
import PageLayout from '../../layout/pageLayout';
import { User } from '../functions/Context/UserContext';
import GetUser from '../functions/GetUser';

const Portfolio = () => {
  const user: User | undefined = GetUser();

  return (
    <PageLayout>
      <div className={styles.portfolioContainer}>
        <Header headerLeft='Dashboard' headerMiddle='Portfolio' headerRight='Charts'/>
        <div className={styles.tab}>
          <PortfolioTab user={user}/>
          <Breakdown user={user}/>
        </div>
      </div>
    </PageLayout>
    
  );
}

export default Portfolio;