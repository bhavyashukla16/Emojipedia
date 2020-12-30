import React from "react";
import emojis from "../emojipedia";
import Entry from "../components/Entry";

function CreateEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
