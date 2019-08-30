import React from 'react';
import PropTypes from 'prop-types';

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

TechItem.defaultProps = {
  tech: 'Ocult'
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
