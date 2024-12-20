import classNames from "classnames";
import { usePatterns } from "../../hooks/usePatterns";
import "./SmilePattern.css";

const SmilePattern = () => {
  const { smilePattern, setSmilePattern, resetSmilePattern } = usePatterns();

  const handleSelectTile = (idx: number) => {
    const newPattern = [...smilePattern];
    newPattern[idx] = newPattern[idx] === 0 ? 1 : 0;
    setSmilePattern(newPattern);
  };

  return (
    <>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => resetSmilePattern()}
      >
        Reset
      </button>
      <div className="pattern-container" aria-label="Smile pattern">
        {smilePattern.map((p, idx) => (
          <button
            aria-label="Flip tile value"
            className={classNames("pattern-container__item", {
              "pattern-container__item--selected": p === 1,
            })}
            onClick={() => handleSelectTile(idx)}
            key={idx}
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );
};

export default SmilePattern;
