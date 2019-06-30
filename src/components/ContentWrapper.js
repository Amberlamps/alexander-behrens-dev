import React from 'react';
import cx from 'classnames';

import styles from './ContentWrapper.module.css';

const ContentWrapper = ({ header = false, children } = {}) => (
  <div className={cx({
    [styles.header]: header
  })}>
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

export default ContentWrapper;
