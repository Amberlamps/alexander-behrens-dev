import React from 'react';
import styles from './Button.module.css';

const Button = ({ name, url }) => (
  <a href={url} className={styles.button}><i className={`icon-${name}`}></i></a>
);

export default Button;
