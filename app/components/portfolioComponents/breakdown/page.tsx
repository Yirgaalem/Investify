'use client';

import styles from './breakdown.module.css';
import pieGraph from '../../../../../public/images/pie-graph.png';
import Image from 'next/image';
import leftArrow from '../../../../../public/images/arrow-left-dark.png';
import rightArrow from '../../../../../public/images/arrow-right-dark.png';
import { useState } from 'react';
import { currency } from '@/app/page';

export type breakdownProps = {
  stocks: number;
  crypto: number;
}

export default function Breakdown(props: breakdownProps) {
  const graphBreakdown: JSX.Element = (
    <Image className={styles.pieGraph} src={pieGraph} alt='pieGraph'/>
  );
  

  const stocks: string = `${currency.format(props.stocks)}`;
  const crypto: string = `${currency.format(props.crypto)}`;
  const total: string = `${currency.format(props.crypto + props.stocks)}`;

  const numericalBreakdown: JSX.Element = (
    <div className={styles.numerical}>
      <div className={styles.stocks}>Stocks: {stocks}</div>
      <div className={styles.cryptoBox}><div className={styles.crypto}>Crytpo: {crypto}</div></div>
      <div className={styles.total}> {total}</div>
    </div>
  );

  const [breakdownDisplay, setBreakdownDisplay] = useState<JSX.Element>(graphBreakdown);
  const [graph, setGraph] = useState<Boolean>(true);

  return (
    <div className={styles.breakdownContainer}>
      <div className={styles.breakdownTitle}>Breakdown</div>
      
      <div className={styles.graphContainer}>
        
        <button onClick={() => changeBreakdown(graph, setGraph, setBreakdownDisplay, graphBreakdown, numericalBreakdown)}>
          <Image className={styles.arrow} src={leftArrow} alt='left-arrow'/>
        </button>
          {breakdownDisplay}
        <button onClick={() => changeBreakdown(graph, setGraph, setBreakdownDisplay, graphBreakdown, numericalBreakdown)}>
          <Image className={styles.arrow} src={rightArrow} alt='rightArrow'/>
        </button>

      </div>
    </div>
  );
}

function changeBreakdown(graph: Boolean,
                        setGraph: Function,
                        setBreakdownDisplay: Function,
                        graphBreakdown: JSX.Element,
                        numericalBreakdown: JSX.Element) {
  if (graph) {
    setBreakdownDisplay(numericalBreakdown);
  } else {
    setBreakdownDisplay(graphBreakdown);
  }
  setGraph(!graph);

}