import React from 'react';

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type} text-uppercase`}  role="alert">
      {message}
    </div>
  );
};

export default Alert;
