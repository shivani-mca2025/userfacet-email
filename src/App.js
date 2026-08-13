import React, { useState } from "react";
import Inbox from "./screens/inbox";
import Compose from "./screens/compose";
import "./assets/styles.css";

function App() {
  const [screen, setScreen] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <header>
        <h2>📧 My Email Client</h2>
        <nav>
          <button onClick={() => setScreen("inbox")}>Inbox</button>
          <button onClick={() => setScreen("compose")}>Compose</button>
        </nav>
        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search emails..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className="avatar">D</div>
      </header>

      {screen === "inbox" && <Inbox searchQuery={searchQuery} />}
      {screen === "compose" && <Compose onBack={() => setScreen("inbox")} />}
    </div>
  );
}

export default App;
