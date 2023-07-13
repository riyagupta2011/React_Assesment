import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import "./task2.css"
function Task2() {
  const [users, setUsers] = useState([]);
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const circleCount = parseInt(searchParams.get('circleCount')) || 0;
    fetchUsers(circleCount);
  }, [location.search]);

  const fetchUsers = async (circleCount) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${circleCount}`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
    navigate('/task3');
  };

  return (
    <div className="card-container">
      {users.map((user) => (
        <div
          className={`card ${selectedUser === user ? 'selected' : ''}`}
          key={user.login.uuid}
          onClick={() => handleCardClick(user)}
        >
          <img src={user.picture.large} alt="Avatar" className="card-avatar" />
          <div className="card-info">
            <div className="card-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
            <div className="card-id">{`ID: ${user.login.uuid}`}</div>
            <div className="card-email">{`Email: ${user.email}`}</div>
            <div className="card-phone">{`Phone: ${user.phone}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task2;
