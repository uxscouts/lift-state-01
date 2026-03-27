import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
// import { FormGroup, Label, Input } from 'reactstrap';


function TimeDropDown(){
    // the "state" to store selected value
    const [selectedValue, setSelectedValue] = useState('');

    // array of options for the drop down
    // array of objects
    const options = [
  { label: 'Select a time', value: '' }, // Initial disabled option
  { label: '1pm', value: '1pm' },
  { label: '2pm', value: '2pm' },
  { label: '3pm', value: '3pm' },
  { label: '4pm', value: '4pm' },
  { label: '5pm', value: '5pm' },
  { label: '6pm', value: '6pm' },
  { label: '7pm', value: '8pm' },
  { label: '9pm', value: '9pm' },
    ];

    // Handler for dropdown selection change
    const handleChange = (event) =>{
        setSelectedValue(event.target.value);
    }

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your booking time is: ' + selectedValue);
    // You can send the selectedValue to an API here   
    }

    {/* Render the <form>, <label>, <select>, and <option> 
    elements in the component's JSX. Use the map() 
    method to generate the options from your array. */}

    return(
        <div>
            <p>TimeDropDown.JSX</p>
            <form onSubmit={handleSubmit}>
            <label>
                Pick Booking Time:<br/>
                <select value={selectedValue} onChange={handleChange}>
                {options.map((option) => (
                    <option
                    key={option.value || 'default'} // Use a unique key
                    value={option.value}
                    disabled={option.value === ''} // Disable the "Select..." option
                    >
                    {option.label}
                    </option>
                ))}
                </select>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default TimeDropDown;