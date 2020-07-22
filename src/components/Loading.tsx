import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';

const Loading: React.FC = () => {

  return (
    <div id="loading">
      <FontAwesomeIcon icon={faGlassMartiniAlt} />
      <p>
        Wait a moment...
      </p>
    </div>
  );
}

export default Loading;