import React, { useRef, useState } from 'react';
import './Report.css'; // Import the CSS file

function Complaint() {
  const complaintRef = useRef('');
  const [message, setMessage] = useState('');

  async function submitHandler(event) {
    event.preventDefault();

    const complaint = {
      text: complaintRef.current.value,
    };

    try {
      const response = await fetch('https://react-d64f8-default-rtdb.firebaseio.com/complaints.json', { // Changed endpoint
        method: 'POST',
        body: JSON.stringify(complaint),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit complaint.');
      }

      setMessage('Complaint submitted successfully!');
      complaintRef.current.value = ''; // Clear the input field
    } catch (error) {
      setMessage('Failed to submit complaint.');
    }
  }

  return (
    <div >
      <div className='bodyyy'>
        <div className='h1'>
        <h1 >Complaint Form</h1>
        </div>
        
        <form onSubmit={submitHandler} className='formm'>
          <div>
            <label htmlFor="complaint">Complaint:</label>
            <input type="text" id="complaint" ref={complaintRef} />
          </div>
          <button className='buttonnn' type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Complaint;
