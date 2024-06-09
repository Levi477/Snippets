import { useState } from "react";
import Element from "../components/Element.jsx";
import Node from "../components/Node.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const date = new Date();
    const newNote = {
      id: notes.length + 1,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <div>
        <Node />
        <div className="flex flex-warp justify-center items-center">
        <button onClick={addNote} className="mx-100 py-2 bg-gray-600 text-white rounded" style={{position: "fixed", bottom: "0", width: "50%"}}>
          Add Note
        </button>
        </div>
        {notes.map((note) => (
          <Element key={note.id} noteCount={note.id} date={note.date} time={note.time} />
        ))}
      </div>
    </>
  );
}

export default App;
