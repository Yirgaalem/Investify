'use client';
import { useState } from 'react';
import styles from './breakdown.module.css';
import pieGraph from '../../../../public/images/pie-graph.png';
import Image from 'next/image';
import leftArrow from '../../../../public/images/arrow-left-dark.png';
import rightArrow from '../../../../public/images/arrow-right-dark.png';
import { User } from '../../../functions/Context/UserContext';
import { currency } from '../../../functions/CurrencyFormat';
import Chart from 'chart.js/auto';
import { Pie, Doughnut } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import sourceData from '../../../data/sourceData.json';

export type breakdownProps = {
  user: User | undefined
}

export default function Breakdown(props: breakdownProps) {
  // const graphBreakdown: JSX.Element = (
  //   <Image className={styles.pieGraph} src={pieGraph} alt='pieGraph'/>
  // );

  const user: User | undefined = props.user; 

  let stockPurchasePrice: number = 0;
  let cryptoPurchasePrice: number = 0;
  
  user?.stock.map((stock) => {
    stockPurchasePrice += stock.stockPurchasePrice;
  });

  user?.crypto.map((crypto) => {
    cryptoPurchasePrice += crypto.cryptoPurchasePrice;
  })

  const stockAmount: string = currency.format(stockPurchasePrice);
  const cryptoAmount: string = currency.format(cryptoPurchasePrice);
  const totalAmount: string = currency.format(stockPurchasePrice + cryptoPurchasePrice);
  
  const numericalBreakdown: JSX.Element = (
    <div className={styles.numerical}>
      <div className={styles.stocks}>Stocks: {stockAmount}</div>
      <div className={styles.cryptoBox}><div className={styles.crypto}>Crytpo: {cryptoAmount}</div></div>
      <div className={styles.total}> {totalAmount}</div>
    </div>
  );
  
  const [graph, setGraph] = useState<Boolean>(true);
  
  const totalPercent: number = stockPurchasePrice + cryptoPurchasePrice;

  const stockPercent: string = ((stockPurchasePrice / totalPercent) * 100).toFixed(2);
  const cryptoPercent: string = ((cryptoPurchasePrice / totalPercent) * 100).toFixed(2);

  Chart.register(CategoryScale);


  const graphBreakdown: JSX.Element = (
    <Doughnut 
        data={{
          labels: ['Crypto', 'Stock'], 
          datasets: [
            {
              label: 'Percent',
              data: [cryptoPercent, stockPercent],
              backgroundColor: [
                '#784E3D',
                '#FEC48D',
              ],
            },
          ],
    }}/>
  );

  return (
    <div className={styles.breakdownContainer}>
      <div className={styles.breakdownTitle}>Breakdown</div>
      
      <div className={styles.graphContainer}>
        
        <button onClick={() => setGraph(!graph)}>
          <Image className={styles.arrow} src={leftArrow} alt='left-arrow'/>
        </button>

          {graph && graphBreakdown}
          {!graph && numericalBreakdown}
        
        <button onClick={() => setGraph(!graph)}>
          <Image className={styles.arrow} src={rightArrow} alt='rightArrow'/>
        </button>

      </div>
    </div>
  );
}
