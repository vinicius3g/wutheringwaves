import React from 'react';
import styles from './InitialPage.module.scss';
import RigthBar from '../RigthBar';

const InitialPage: React.FC = () => {
  return (
    <>
      <div className={styles.mask_bg} />
      <div className={styles.mask_bg2} />
      <div className={styles.bottom_box}>
        <div className={styles.btn_play} />
        <div className={styles.download_box}>
          <div className={styles.qr_code}>
            <img
              src="https://wutheringwaves.kurogames.com/website-preface/assets/qrcode-c910979d.jpg"
              alt=""
            />
          </div>

          <div className={styles.global_download}>
            <div className={styles.row1}>
              <div className={styles.btn_appstore}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/appstore-a48105a4.png"
                  alt=""
                />
              </div>

              <div className={styles.btn_googleplay}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/googleplay-6571d674.png"
                  alt=""
                />
              </div>

              <div className={styles.googleplay_games}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/googleplay-games-fbcc6536.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.row2}>
              <div className={styles.btn_windows}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/windows-6af1a57f.png"
                  alt=""
                />
              </div>

              <div className={styles.btn_epic}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/epic-fd91b340.png"
                  alt=""
                />
              </div>

              <div className={styles.btn_login}>
                <img
                  src="https://wutheringwaves.kurogames.com/website-preface/assets/signup-750b0af4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RigthBar />
    </>
  );
};

export default InitialPage;
