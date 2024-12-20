import { createContext, useState } from "react";
import { storageKeys } from "../constants/storageKeys";

const initialPattern = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

interface PatternContextType {
  testPattern: number[];
  setTestPattern: (pattern: number[]) => void;
  smilePattern: number[];
  setSmilePattern: (pattern: number[]) => void;
  resetSmilePattern: () => void;
}

interface PatternContextProps {
  children: React.ReactNode;
}

export const PatternContext = createContext<PatternContextType>({
  testPattern: [],
  setTestPattern: () => {},
  smilePattern: [],
  setSmilePattern: () => {},
  resetSmilePattern: () => {},
});

const getInitialTestPattern = () => {
  const storedPattern = localStorage.getItem(storageKeys.testPattern);
  if (!storedPattern) return initialPattern;

  return JSON.parse(storedPattern);
};

export const PatternProvider = ({ children }: PatternContextProps) => {
  const [smilePattern, setSmilePattern] = useState(initialPattern);
  const [testPattern, setTestPattern] = useState(getInitialTestPattern);

  const resetSmilePattern = () => {
    setSmilePattern(initialPattern);
  };

  const enhanceSetTestPattern = (pattern: number[]) => {
    setTestPattern(pattern);
    localStorage.setItem(storageKeys.testPattern, JSON.stringify(pattern));
  };

  return (
    <PatternContext.Provider
      value={{
        smilePattern,
        setSmilePattern,
        testPattern,
        setTestPattern: enhanceSetTestPattern,
        resetSmilePattern,
      }}
    >
      {children}
    </PatternContext.Provider>
  );
};
