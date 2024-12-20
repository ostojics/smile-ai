import { useState } from "react";
import { usePatterns } from "../../hooks/usePatterns";
import "./Result.css";

const Result = () => {
  const { smilePattern, testPattern } = usePatterns();
  const [result, setResult] = useState<number | null>(null);

  const computeResult = () => {
    const result = smilePattern.reduce(
      (acc, curr, idx) => acc + curr * testPattern[idx],
      0
    );

    setResult(result);
  };

  const displayResult = () => {
    if (result === null) return "Not tested";

    return result === 1 ? "Smiling" : "Not smiling";
  };

  return (
    <section className="result">
      <div>
        <button onClick={computeResult}>Test</button>
      </div>
      <div>
        <p className="result__text">
          AI result: {displayResult()} {result !== null && `(${result})`}
        </p>
      </div>
    </section>
  );
};

export default Result;
