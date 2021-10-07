import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const {
    children,
    wrapper = styles.wrapper,
    container = styles.container,
  } = props;

  return (
    <section className={wrapper}>
      <div className={container}>{children}</div>
    </section>
  );
};

export default Layout;
