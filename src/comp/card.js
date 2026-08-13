import React from "react";

function MailCard({ sender, subject, attachment, onClick }) {
  return (
    <div className="mail-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <h4>{sender}</h4>
      <p>{subject}</p>
      {attachment && <span className="clip">📎</span>}
    </div>
  );
}

export default MailCard;
