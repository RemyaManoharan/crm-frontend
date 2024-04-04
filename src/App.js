import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./page/entry/Entry.page";
import Defaultlayout from "./layout/Defaultlayout";
import DashboardPage from "./page/dashboard/DashboardPage";
import AddTicketPage from "./page/NewTicket/AddTicketPage";
import TicketListPage from "./page/TicketListing/TicketListPage";
import TicketPage from "./page/Ticket/TicketPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/partials/Header";
import Footer from "./layout/partials/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Entry />,
    },
    {
      path: "/", // Root route
      element: <Defaultlayout />, // Use Defaultlayout as the element for the root route
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/add-ticket",
          element: <AddTicketPage />,
        },
        {
          path: "/tickets",
          element: <TicketListPage />,
        },
        {
          path: "/ticket/:id",
          element: <TicketPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
