'use client';

import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { useNav } from '@/context/NavContext';
import useWindowSize from '@/hooks/useWindowSize';

interface SlidesProps {
  slides: React.ReactNode[];
}

const Slider: React.FC<SlidesProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { handleNext, handlePrev } = useNav();
  const windowSize = useWindowSize();

  const handlePrevSlider = () => {
    setActiveSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );

    handlePrev('translate(0px, 0px)');
    handleNext('translate(0px, 0px)');
  };

  const handleNextSlider = () => {
    setActiveSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );

    handleNext(`translate(-${windowSize.width}px, 0px)`);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0 && activeSlide < slides.length - 1) {
      handleNextSlider();
    } else if (e.deltaY > 0 && activeSlide > 0) {
      handlePrevSlider();
    }
  };

  const handleBulletClick = (index: number) => {
    if (index > activeSlide) {
      handleNextSlider();
    } else if (index < activeSlide) {
      handlePrevSlider();
    }
    setActiveSlide(index);
  };

  return (
    <div className={styles.slider_container} onWheel={handleWheel}>
      <div className={styles.swipper}>
        <div className={styles.main_content}>{slides[activeSlide]}</div>

        {activeSlide > 0 && (
          <button
            onClick={handlePrevSlider}
            className={styles.sliderButton_prev}
          >
            <i></i>
          </button>
        )}
        {activeSlide < slides.length - 1 && (
          <button
            onClick={handleNextSlider}
            className={styles.sliderButton_next}
          >
            <i></i>
          </button>
        )}
      </div>

      <div className={styles.bullets}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.bullet} ${
              index === activeSlide ? styles.active : ''
            }`}
            onClick={() => handleBulletClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
