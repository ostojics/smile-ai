import { useContext } from "react";
import { PatternContext } from "../context/PatternContext";

export const usePatterns = () => {
  const context = useContext(PatternContext);
  if (!context) {
    throw new Error("usePatterns must be used within a PatternProvider");
  }

  return context;
};
