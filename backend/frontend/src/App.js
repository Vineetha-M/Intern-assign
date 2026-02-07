import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/facts/")
      .then(res => setFacts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Facts App</h2>
      <ul>
        {facts.map(f => (
          <li key={f.id}>{f.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
