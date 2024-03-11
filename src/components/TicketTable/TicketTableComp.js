import React from "react";
import { Table } from "react-bootstrap";

const TicketTableComp = ({ tickets }) => {
  console.log(tickets);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.id}</td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No tickets to show</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketTableComp;
