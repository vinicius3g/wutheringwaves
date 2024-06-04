'use client';

import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { useNav } from '@/context/NavContext';
import useWindowSize from '@/hooks/useWindowSize';

interface SlidesProps {
  slides: React.ReactNode[];
  // handlePrev: (transition: string) => void;
  // handleNext: (transition: string) => void;
}

const Slider: React.FC<SlidesProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { handleNext, handlePrev } = useNav();
  const windowSize = useWindowSize();

  // const isDesktop = windowSize.width >= 768;

  console.log({windowSize})

  const handlePrevSlider = () => {
    setActiveSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );

    handlePrev('translate(0px, 0px)'); 
    handleNext('translate(0px, 0px)')
  };

  const handleNextSlider = () => {
    setActiveSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );

    handleNext(`translate(-${windowSize.width}px, 0px)`); 
    // handleNext(`translate(-1231, 0px)`); 
  };

  // // Handle transitions based on currentSlide (optional)
  // useEffect(() => {
  //   if (currentSlide !== 0) {
  //     setTransitionState('translateX(100%)'); // Initial transition for non-first slide
  //   } else {
  //     setTransitionState('none'); // No transition for first slide
  //   }
  // }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <button onClick={handlePrevSlider} className={styles.sliderButton}>
        Anterior
      </button>
      <div className={styles.sliderContent}>{slides[activeSlide]}</div>
      <button onClick={handleNextSlider} className={styles.sliderButton}>
        Próximo
      </button>
    </div>
  );
};

export default Slider;
