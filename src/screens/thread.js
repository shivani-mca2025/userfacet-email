// src/screens/thread.js
import React from "react";

function Thread({ mail, onBack }) {
  if (!mail) return null;

  return (
    <div className="thread-view">
      <button onClick={onBack}>⬅ Back to Inbox</button>
      <h3>{mail.subject}</h3>
      <p><strong>From:</strong> {mail.sender}</p>
      <p><strong>Body:</strong> This is a placeholder body for "{mail.subject}".</p>
      {mail.attachment && <p>📎 Attachment included</p>}
    </div>
  );
}

export default Thread;
