import { BackgroundBox } from '@/components/Background';
import PageContent from '@/components/PageContent';

import styles from './Home.module.scss'

export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className={styles.pc_wrapper}>
      <BackgroundBox />
      <PageContent />
    </main>
  );
}
