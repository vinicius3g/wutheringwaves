import React from 'react';
import styles from './RigthBar.module.scss';

const RigthBar: React.FC = () => {
  return (
    <div className={styles.media_slide}>
      <div className={styles.top} />
      <div className={styles.media_box}>
        <div className={styles.link_item}>
          <a className={styles.twitter} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.facebook} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.youtube} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.discord} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.reddit} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.instagram} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
        <div className={styles.link_item}>
          <a className={styles.tiktok} href="https://twitter.com/Wuthering_Waves">
            <i></i>
          </a>
        </div>
      </div>
      <div className={styles.bottom} />
    </div>
  );
};

export default RigthBar;
