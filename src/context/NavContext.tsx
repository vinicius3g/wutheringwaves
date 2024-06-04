"use client"

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode
} from 'react';

interface NavContextType {
  next: string;
  prev: string;
  handlePrev: (value: string) => void;
  handleNext: (value: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [prev, setPrev] = useState('translate(0px, 0px)');
  const [next, setNext] = useState('');

  const handlePrev = (value: string) => {
    setPrev(value);
  };

  const handleNext = (value: string) => {
    setNext(value);
  };

  return (
    <NavContext.Provider value={{ next, prev, handleNext, handlePrev }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = (): NavContextType => {
  const context = useContext(NavContext);

  if (context === undefined) {
    throw new Error('useNav must be used within an NavProvider');
  }

  return context;
};
