import React from 'react';

// Destructure props.tech to get only the value expected
function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default TechItem;
