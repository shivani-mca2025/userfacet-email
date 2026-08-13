import React, { useState } from "react";
import mockMail from "../assets/mockMail";
import MailCard from "../comp/card";
import Thread from "../screens/thread";

function Inbox({ searchQuery }) {
  const [selectedMail, setSelectedMail] = useState(null);

  const filteredMail = mockMail.filter(mail =>
    mail.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mail.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {selectedMail ? (
        <Thread mail={selectedMail} onBack={() => setSelectedMail(null)} />
      ) : (
        <div className="inbox-grid">
          {filteredMail.map(mail => (
            <MailCard
              key={mail.id}
              sender={mail.sender}
              subject={mail.subject}
              attachment={mail.attachment}
              onClick={() =>{console.log("Clicked:", mail);   // ✅ should print in browser console
  setSelectedMail(mail);}}
            />
          ))}
          {filteredMail.length === 0 && <p>No emails found.</p>}
        </div>
      )}
    </>
  );
}

export default Inbox;
