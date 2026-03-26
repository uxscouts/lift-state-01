import React, { useState } from 'react';


// Child component receives the handler function as a prop
function BookingTimes({ onTimeChange }){

    const [childInput2, setChildInput2] = useState("");

    const handleInputChange2 = (event) => {
        const newValue2 = event.target.value;
        setChildInput2(newValue2);
        // Call the parent's function with the child's data
        onTimeChange(newValue2);
    }

   return (
    <div>
      <p><i>[Child Component]</i></p>
      <input
        type="text"
        value={childInput2}
        onChange={handleInputChange2}
        placeholder="Type here to update parent"
      />
    </div>
  );   

}

export default BookingTimes;
