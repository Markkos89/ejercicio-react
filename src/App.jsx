import React from 'react';
import { hot } from 'react-hot-loader';
import Title from './components/Title';
import TotalAmount from './components/TotalAmount';
import Term from './components/Term';
import FixedMonthlyFee from './components/FixedMonthlyFee';

import style from './styles.scss';

const App = () => (
  <>
    <div className={style.container}>
      <div className={style.innerContainer}>
        <Title />
        <TotalAmount />
        <Term />
        <FixedMonthlyFee />
      </div>
    </div>
  </>
);

export default hot(module)(App);
