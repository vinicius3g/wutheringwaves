import React from 'react';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.btn_login}>
        <i></i>
      </div>

      <div className={styles.btn_music}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.language_select}>
        <div className={styles.current_lang}>
          <i></i>
        </div>
        <div className={styles.lang_list}></div>
      </div>

      <a
        href="https://wutheringwaves.kurogames.com/en/main"
        target="_blank"
        className={styles.btn_enter}
      >
        Official Website
      </a>
    </div>
  );
};

export default TopBar;
