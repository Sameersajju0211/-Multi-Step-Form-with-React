import React from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Form Submitted Successfully!</h2>
        <p>Your information has been successfully submitted.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
