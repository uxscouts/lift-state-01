import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import BookingTimes from "./BookingTimes";

function ParentComponent() {

    const [message, setMessage] = useState('Initial message in parent');

    const updateMessage = (newMessage) => {
      setMessage(newMessage);
    };


  // ---------------------------------------------

  // make additional state-lift functions
  // timeOfBooking
  // make timeOfBooking state setter
  const [timeOfBooking, setTimeOfBooking] = useState("Initial time in parent");

  // timeOfBooking function to be passed down to child
  const updateBooking = (newTime) => {
    setTimeOfBooking(newTime);
  };

  return (
    <div>
      <h1>Parent Component</h1>
       <p>Message: {message}</p> 
      <p>Time Set: {timeOfBooking}</p>
      {/* Pass the handler function as a prop */}
      <ChildComponent onMessageChange={updateMessage} /> 
      <hr />
      {/* Pass the handler function as a prop */}
      <BookingTimes onTimeChange={updateBooking} />
    </div>
  );
}

export default ParentComponent;
