import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./task.css"
function Task1() {
  const [circles, setCircles] = useState([{ count: 0, color: 'yellow' }]);
  const navigate = useNavigate();

  const handleIncrement = (index) => {
    const updatedCircles = [...circles];
    updatedCircles[index].count += 1;
    updatedCircles[index].color = getRandomColor();
    setCircles(updatedCircles);
  };

  const handleDuplicate = (index) => {
    if (circles.length < 10) {
      const duplicateCircle = { ...circles[index], count: 0 };
      const updatedCircles = [...circles];
      updatedCircles.splice(index + 1, 0, duplicateCircle);
      setCircles(updatedCircles);
    }
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'chartreuse', 'darkseagreen'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const goToTask2 = () => {
    const circleCount = circles.length;
    navigate(`/task2?circleCount=${circleCount}`);
  };

  return (
    <div className='circle-task-container'>
      {circles.map((circle, index) => (
        <div key={index}>
          <div
            className="circle"
            style={{ backgroundColor: circle.color }}
          >
            <h2 className="count">{circle.count}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => handleIncrement(index)}>
              Increment
            </button>
            <button onClick={() => handleDuplicate(index)}>Duplicate</button>
          </div>
        </div>
      ))}
      <button onClick={goToTask2} className='b'>Go to Task 2</button>
    </div>
  );
}

export default Task1;