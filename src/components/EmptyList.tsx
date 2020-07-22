import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

interface EmptyListProps {
  text: string;
}

const EmptyList: React.FC<EmptyListProps> = (props: EmptyListProps) => {
  const {text} = props;

  return <div className="empty">
    <FontAwesomeIcon icon={faCocktail} />
    <p>
      {text}
    </p>
  </div>
};

export default EmptyList;