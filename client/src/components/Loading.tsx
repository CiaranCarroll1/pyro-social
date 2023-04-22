import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <FaSpinner className="animate-spin" size={50} />
    </div>
  );
};

export default Loading;
