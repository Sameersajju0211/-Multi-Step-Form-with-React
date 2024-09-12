import React from 'react';
import './StepOne.css';

const StepOne = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    
     <div className="step-one">
      <h2 className='main-heading'>Personal Information</h2>

      <div className="form-group">
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Phone <span className="required">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    </div>
    
  );
};

export default StepOne;
