'use client';

import styles from './PageContent.module.scss';
import Slider from '../Slider';
import InitialPage from '../InitialPage';

const PageContent: React.FC = () => {
  const slides = [<InitialPage key="1" />];

  return (
    <div className={styles.swipper}>
      <Slider slides={slides} />
    </div>
  );
};

export default PageContent;
