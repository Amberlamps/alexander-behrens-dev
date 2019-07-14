import React from 'react';

import styles from './Tldr.module.css';

const Tldr = ({ children }) => (
  <div className={styles.container}>
    <span className={styles.tldr}>tl;dr</span>{children}
  </div>
);

export default Tldr;
