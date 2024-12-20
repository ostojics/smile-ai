import { createContext, useState } from "react";

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

export const PatternProvider = ({ children }: PatternContextProps) => {
  const [smilePattern, setSmilePattern] = useState(initialPattern);
  const [testPattern, setTestPattern] = useState(initialPattern);

  const resetSmilePattern = () => {
    setSmilePattern(initialPattern);
  };

  return (
    <PatternContext.Provider
      value={{
        smilePattern,
        setSmilePattern,
        testPattern,
        setTestPattern,
        resetSmilePattern,
      }}
    >
      {children}
    </PatternContext.Provider>
  );
};
