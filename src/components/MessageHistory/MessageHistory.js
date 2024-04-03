import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.style.css";

const MessageHistory = ({ msg }) => {
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send text-secondary" style={{ fontWeight: 'bold' }} >
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};

export default MessageHistory;
