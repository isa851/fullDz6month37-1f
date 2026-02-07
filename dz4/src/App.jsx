import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState(
    JSON.parse(localStorage.getItem("names")) || []
  );

  const addName = () => {
    if (!name) return;
    const updated = [...names, name];
    setNames(updated);
    localStorage.setItem("names", JSON.stringify(updated));
    setName("");
  };

  return (
    <div>
      <h2>Список имён</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addName}>Добавить</button>

      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;