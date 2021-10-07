import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <input
      type="text"
      placeholder="Search notes or todos"
      className={styles.search}
    />
  );
};

export default Search;
