import "./App.css";
import Result from "./components/Result/Result";
import Tester from "./components/Tester/Tester";

function App() {
  return (
    <section>
      <h1>Smile AI test</h1>
      <p>
        Goal: Adjust the testing pattern so it can detect a smiling pattern
        correctly
      </p>
      <p>
        <span>-1 = Not smiling</span>
        <br />
        <span>1 = Smiling</span>
      </p>
      <Tester />
      <Result />
    </section>
  );
}

export default App;
