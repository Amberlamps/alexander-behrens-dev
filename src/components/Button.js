import React from 'react';
import styles from './Button.module.css';

const Button = ({ name, url, children }) => (
  <a href={url} className={styles.button}><i className={`icon-${name}`}></i>{children}</a>
);

export default Button;
