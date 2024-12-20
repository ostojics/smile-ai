import { usePatterns } from "../../hooks/usePatterns";
import "./TestPattern.css";

const TestPattern = () => {
  const { testPattern, setTestPattern } = usePatterns();

  const handleChangeTile = (idx: number) => {
    const newPattern = [...testPattern];
    const newValue = prompt("Please enter new value");
    if (newValue && !isNaN(parseInt(newValue))) {
      newPattern[idx] = parseInt(newValue);
      setTestPattern(newPattern);
    }
  };

  return (
    <div className="pattern-container" aria-label="Test pattern">
      {testPattern.map((p, idx) => (
        <button
          className="pattern-container__item"
          aria-label="Change tile value"
          onClick={() => handleChangeTile(idx)}
          key={idx}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default TestPattern;
