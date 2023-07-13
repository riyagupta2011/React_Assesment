import React, { useState } from 'react';
import './ticket.css';

const NewTicket = () => {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (
      leadSource === '' ||
      name === '' ||
      contactNumber === '' ||
      email === '' ||
      vehicleMake === '' ||
      vehicleRegistration === '' ||
      breakdownIssue === '' ||
      location === ''
    ) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Additional validation
    if (!emailIsValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!registrationNumberIsValid(vehicleRegistration)) {
      alert('Please enter a valid vehicle registration number (all caps, no spaces).');
      return;
    }

    // Set assistance time
    const currentTime = new Date().toLocaleString();
    setAssistanceTime(currentTime);

    // Successful form submission
    setIsFormSubmitted(true);
  };

  const emailIsValid = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const registrationNumberIsValid = (registrationNumber) => {
    // Registration number validation regex
    const registrationNumberRegex = /^[A-Z0-9]+$/;
    return registrationNumberRegex.test(registrationNumber);
  };

  return (
    <div className="container">
      <h1>Create New Ticket</h1>
      {isFormSubmitted ? (
        <div className="popup">
          <p>New Task Created Successfully</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Lead Source *</label>
            <select value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
              <option value="">Select Lead Source</option>
              <option value="Web">Web</option>
              <option value="Chat">Chat</option>
              <option value="Call">Call</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Contact Number *</label>
            <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Vehicle Make *</label>
            <input type="text" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Vehicle Registration Number *</label>
            <input type="text" value={vehicleRegistration} onChange={(e) => setVehicleRegistration(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Breakdown Issue *</label>
            <textarea value={breakdownIssue} onChange={(e) => setBreakdownIssue(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Location *</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Service Fee</label>
            <input type="text" value={serviceFee} onChange={(e) => setServiceFee(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Assistance Time</label>
            <input type="text" value={assistanceTime || new Date().toLocaleString()} readOnly />
          </div>
          <div className="form-group">
            <label>Comments</label>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default NewTicket;
