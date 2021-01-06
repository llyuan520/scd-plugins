import React from 'react';
import styles from './index.css';

export default (props: any) => {
  const { route } = props;
  console.log(props);
  return (
    <div className={styles.normal}>
      <h1>当前页面 {route.name}</h1>
    </div>
  );
};
