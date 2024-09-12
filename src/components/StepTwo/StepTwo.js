import React from 'react';
import './StepTwo.css'; 

const StepTwo = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div className="step-two">
      <h2>Enter Address Details</h2>

      <div className="form-group">
        <label htmlFor="address1">
          Address Line 1 <span className="required">*</span>
        </label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="address2">Address Line 2</label>
        <input
          type="text"
          id="address2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">
          City <span className="required">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="state">
          State <span className="required">*</span>
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="zip">
          Zip Code <span className="required">*</span>
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.zip && <p className="error">{errors.zip}</p>}
      </div>
    </div>
  );
};

export default StepTwo;
