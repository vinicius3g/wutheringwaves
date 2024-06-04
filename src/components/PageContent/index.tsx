'use client';

import styles from './PageContent.module.scss';
import Slider from '../Slider';

const PageContent: React.FC = () => {
  const slides = [
    <div key="first" className={styles.box2}>
      box1
    </div>,
    <div key="first" className={styles.box2}>
      box2
    </div>
  ];

  return (
    <div className={styles.box}>
      <Slider
        slides={slides}
      />
    </div>
  );
};

export default PageContent;
