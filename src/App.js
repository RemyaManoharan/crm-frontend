import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/entry/Entry.page";
import Defaultlayout from "./layout/Defaultlayout";
import DashboardPage from "./page/dashboard/DashboardPage";


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <Defaultlayout>
        <DashboardPage/>
        </Defaultlayout>
    </div>
  );
}

export default App;
