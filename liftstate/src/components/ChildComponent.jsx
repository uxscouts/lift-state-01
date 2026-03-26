import React, { useState } from 'react';

// Child component receives the handler function as a prop
function ChildComponent({ onMessageChange }) {
  const [childInput, setChildInput] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setChildInput(newValue);
    // Call the parent's function with the child's data
    onMessageChange(newValue);
  };

  return (
    <div>
      <p><i>[Child Component]</i></p>
      <input
        type="text"
        value={childInput}
        onChange={handleInputChange}
        placeholder="Type here to update parent"
      />
    </div>
  );
}

export default ChildComponent;