import Header from '../components/header/page';
import PortfolioTab from '../components/portfolioComponents/portfolioTab/page';
import Breakdown from '../components/portfolioComponents/breakdown/page';
import styles from './portfolio.module.css';
import PageLayout from '../../layout/pageLayout';
import userId from '../getId/page';
const Portfolio = ( {params} : {
  params: {
    id: string
  }
}) => {
  // console.log('portfolio ' + params.id);
  // console.log('my id: '+ userId)
  // const x = sessionStorage.getItem('userId');
  // console.log('storage checker: ' + x);
  return (
    <PageLayout>
      {params.id}
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