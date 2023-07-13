import React, { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './task3.css';

function Task3() {
  const history = useNavigate();
  const { selectedUser } = useContext(UserContext);

  const handleGoBack = () => {
    history(-1)
  };

  if (!selectedUser) {
    // If no user is selected, you can handle this case accordingly
    return <div>No user selected.</div>;
  }

  return (
    <div className="task3-container">
      <div className="user-card">
        <div className="user-avatar">
          <img src={selectedUser.picture.large} alt="Avatar" />
        </div>
        <div className="user-info">
          <h2>{`${selectedUser.name.title} ${selectedUser.name.first} ${selectedUser.name.last}`}</h2>
          <p>{`ID: ${selectedUser.login.uuid}`}</p>
          <p>{`Email: ${selectedUser.email}`}</p>
          <p>{`Phone: ${selectedUser.phone}`}</p>
        </div>
      </div>
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default Task3;
