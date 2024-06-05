'use client';

import styles from './Background.module.scss';
import { useNav } from '@/context/NavContext';

export const BackgroundBox: React.FC = () => {
  const { next } = useNav();

  const url1 =
    'https://wutheringwaves.kurogames.com/website-preface/video/desktop/kv1.mp4';
  const url2 =
    'https://wutheringwaves.kurogames.com/website-preface/video/desktop/lizi-loop.mp4';
  const url3 =
    'https://wutheringwaves.kurogames.com/website-preface/assets/progress-bg-661d1a54.jpg';
  const url4 =
    'https://wutheringwaves.kurogames.com/website-preface/video/desktop/index_enter.mp4';

  return (
    <div className={styles.bg_box} style={{ transform: 'translate(0px, 0px)' }}>
      <div
        key="slide1"
        className={`${styles.bg1} ${styles.bg} ${styles.bg_show}`}
        style={{ transform: next }}
      >
        <div className={styles.kv_video}>
          <video controls={false} autoPlay={true} muted={true} loop={true}>
            <source src={url1} type="video/mp4" />
            <track kind="captions" src="" label="No captions" />
          </video>
        </div>
      </div>

      <div
        key="slide2"
        className={`${styles.bg2} ${styles.bg}`}
        style={{ transform: next }}
      >
        <div className={styles.light}></div>
        <div className={styles.lizi_box}>
          <video playsInline autoPlay={true} loop={true} preload='auto'>
            <source src={url2} type="video/mp4" />
            {/* <track kind="captions" src="" label="No captions" /> */}
          </video>
        </div>
        <img src={url3} alt="" />
      </div>

      <div data-v-589dc6cc key="slide3" className={styles.video_box}>
        <video data-v-589dc6cc controls={false} preload="auto" muted={true}>
          <source data-v-589dc6cc src={url4} type="video/mp4" />
          <track kind="captions" src="" label="No captions" />
        </video>

        <video
          data-v-589dc6cc
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
          className={styles.video_enter}
        >
          <source
            data-v-589dc6cc
            src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/index_loop.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="" label="No captions" />
        </video>

        <video data-v-589dc6cc controls={false} preload="auto" muted={true}>
          <source
            data-v-589dc6cc
            src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/page_enter_left.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="" label="No captions" />
        </video>

        <video data-v-589dc6cc controls={false} preload="auto" muted={true}>
          <source
            data-v-589dc6cc
            src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/page_loop.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="" label="No captions" />
        </video>

        <video data-v-589dc6cc controls={false} preload="auto" muted={true}>
          <source
            data-v-589dc6cc
            src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/page_enter_right.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="" label="No captions" />
        </video>
      </div>
    </div>
  );
};
