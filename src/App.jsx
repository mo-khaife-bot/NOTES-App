import React from "react";
import "./Components/css/App.css";
import Header from "./Components/NoteComponents/Header.jsx";
import Notes from "./Components/NoteComponents/Notes.jsx";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;
