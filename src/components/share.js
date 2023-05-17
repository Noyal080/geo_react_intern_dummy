import React, { useState } from 'react';

function Collaboration() {
  const [sharedUsers, setSharedUsers] = useState(['user 1']);
  const [user, setUser] = useState('user1');

  const addSharedUser = (user) => {
    setSharedUsers([...sharedUsers, user]);
  }

  const removeSharedUser = (user) => {
    setSharedUsers(sharedUsers.filter((u) => u !== user));
  }

  return (
    <div>
      <h2>Shared Users:</h2>
      <ul>
        {sharedUsers.map((user) => (
          <li key={user}>
            {user}
            <button onClick={() => removeSharedUser(user)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Share With:</h2>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <input type="text" placeholder="Username" />
        <button onClick={() => addSharedUser(user)}>Share</button>
      </form>
    </div>
  );
}

export default Collaboration;
