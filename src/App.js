import React, { useState, useEffect } from 'react';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import ConfirmationPopup from './components/ConfirmationPopup/ConfirmationPopup';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Load data from local storage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Save data to local storage whenever formData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setShowPopup(true); // Show confirmation popup
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let newErrors = {};
    if (!value && name !== 'address2') { // Skip validation for Address Line 2
      newErrors[name] = `${name.replace(/^\w/, (c) => c.toUpperCase())} is required`;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors
    }));
  };

  return (
    <div className="app-container">
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
        />
      )}
      {currentStep === 3 && <StepThree formData={formData} />}

      <div className="button-container">
        {currentStep > 1 && <button onClick={handleBack}>Back</button>}
        {currentStep < 3 && currentStep !== 2 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentStep === 2 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>

      {showPopup && <ConfirmationPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
