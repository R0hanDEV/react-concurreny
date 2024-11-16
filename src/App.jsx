import "./App.css";
import FilterComponent from "./component/FilterComponent";
import OptimizeFilterComponent from "./component/OptimizeFilterComponent";
import DefferedOptimizeApp from "./component/DeferredOptimizeApp";

function App() {
  return (
    <>
      <h1>React concurreny</h1>
      <h6>nonOptime code </h6>
      <FilterComponent />

      <h6>nonOptime code using transition </h6>
      <OptimizeFilterComponent />

      <h6>nonOptime code using deffered value</h6>
      <DefferedOptimizeApp />
    </>
  );
}

export default App;
