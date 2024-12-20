import SmilePattern from "../SmilePattern/SmilePattern";
import TestPattern from "../TestPattern/TestPattern";
import "./Tester.css";
const Tester = () => {
  return (
    <section className="tester">
      <div className="tester__smile">
        <h2>Smile pattern that will be tested</h2>
        <SmilePattern />
      </div>
      <div className="tester__pattern">
        <h2>
          Each tile value will be multiplied by the corresponding tile in this
          test pattern and the sum will be the result
        </h2>
        <TestPattern />
      </div>
    </section>
  );
};

export default Tester;
