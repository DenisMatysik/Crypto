import "./App.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import ModalPortfolio from "./components/modal/ModalPortfolio";
import ModalAdd from "./components/modal/ModalAdd";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <ModalPortfolio />
      {/* <ModalAdd /> */}
    </div>
  );
}

export default App;
