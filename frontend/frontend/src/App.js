import React, { useEffect, useState } from 'react';
import { getBugs } from './api/bugService';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBugs()
      .then(response => {
        setBugs(response.data);
      })
      .catch(error => {
        console.error("Error fetching bugs:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bug Tracker</h1>
      {bugs.length === 0 ? (
        <p>No bugs found.</p>
      ) : (
        <ul>
          {bugs.map(bug => (
            <li key={bug.id}>
              <strong>{bug.title}</strong> - {bug.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
