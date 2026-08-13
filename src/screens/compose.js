import React, { useState } from "react";

function Compose({ onBack }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    alert(`Email sent to ${to} with subject "${subject}"`);
    onBack();
  };

  return (
    <div className="compose-view">
      <button onClick={onBack}>⬅ Back</button>
      <h3>✉️ Compose Email</h3>
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={e => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Write your message..."
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button className="send-btn" onClick={handleSend}>Send</button>
    </div>
  );
}

export default Compose;   // ✅ must be default export
