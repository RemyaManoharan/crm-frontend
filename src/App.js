import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/entry/Entry.page";
import Defaultlayout from "./layout/Defaultlayout";
import DashboardPage from "./page/dashboard/DashboardPage";
import AddTicketPage from "./page/NewTicket/AddTicketPage";
import TicketListPage from "./page/TicketListing/TicketListPage";



function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <Defaultlayout>
        {/* <DashboardPage/> */}
      {/* <AddTicketPage/> */}
      <TicketListPage/>
        </Defaultlayout>
    </div>
  );
}

export default App;
