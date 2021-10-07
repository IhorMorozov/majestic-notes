import React from 'react';
import styles from './OverviewPage.module.scss';

const OverviewPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <p>Majestic</p>
            <h1>Quick Notes</h1>
          </div>
          <div className={styles.card}>
            <p>Majestic</p>
            <h1>Quick Todos</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
