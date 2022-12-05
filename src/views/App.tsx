import "./App.css";
import HeadMenu from "./components/HeadMenu/HeadMenu";
import LefttMenu from "./components/LeftMenu/LeftMenu";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="app">
      <div className="container">
        <HeadMenu />
        <div className="body">
          <LefttMenu />
          <div className="info">
            <div className="info_title">
              <h2>Строительно-монтажные работы</h2>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
