import "./App.css";
import Result from "./components/Result/Result";
import Tester from "./components/Tester/Tester";

function App() {
  return (
    <section>
      <h1>Smile AI</h1>
      <p>
        Goal: Adjust the testing pattern so the model can detect a smiling
        pattern correctly
      </p>
      <p>
        1 = Smiling
        <br />0 & -1 = Not smiling
      </p>
      <Tester />
      <Result />
    </section>
  );
}

export default App;
