'use client'
import Header from '../components/header/page';
import PortfolioTab from '../components/portfolioComponents/portfolioTab/page';
import Breakdown from '../components/portfolioComponents/breakdown/page';
import styles from './portfolio.module.css';
import PageLayout from '../../layout/pageLayout';
import { useUserContext } from '../functions/Context/UserContext';

const Portfolio = () => {
  
  const {user, setUser} = useUserContext();

  return (
    <PageLayout>
      <div className={styles.portfolioContainer}>
        <Header headerLeft='Dashboard' headerMiddle='Portfolio' headerRight='Charts'/>
        <div className={styles.tab}>
          <PortfolioTab/>
          <Breakdown stocks={30030.10} crypto={74019.02}/>
        </div>
      </div>
    </PageLayout>
    
  );
}

export default Portfolio;