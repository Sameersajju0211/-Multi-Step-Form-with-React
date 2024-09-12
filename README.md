Here's a sample README file for your popup component, which includes instructions for setup, usage, and styling:

---

# Confirmation Popup Component

This README provides information on how to use the Confirmation Popup component in a React application.

## Description

The Confirmation Popup is a modal dialog used to display a confirmation message to users. It features a blurred background effect and a clean, modern design. This component is responsive and includes animations for a smooth user experience.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Import the Component:**

   In your React component file, import the `ConfirmationPopup` component:

   ```jsx
   import ConfirmationPopup from './ConfirmationPopup';
   ```

2. **Add the Component to Your JSX:**

   Use the `ConfirmationPopup` component in your React component. Pass an `onClose` function as a prop to handle closing the popup:

   ```jsx
   import React, { useState } from 'react';
   import ConfirmationPopup from './ConfirmationPopup';

   const App = () => {
     const [isPopupVisible, setIsPopupVisible] = useState(false);

     const handleOpenPopup = () => setIsPopupVisible(true);
     const handleClosePopup = () => setIsPopupVisible(false);

     return (
       <div>
         <button onClick={handleOpenPopup}>Show Confirmation</button>
         {isPopupVisible && <ConfirmationPopup onClose={handleClosePopup} />}
       </div>
     );
   };

   export default App;
   ```

## CSS Styling

The CSS for the popup component is provided in the `ConfirmationPopup.css` file. It includes styles for the popup container, inner popup, title, paragraph, and buttons.

### CSS Details

- **Popup Container Styles:**
  - `position: fixed;`
  - `top: 0;`
  - `left: 0;`
  - `width: 100%;`
  - `height: 100%;`
  - `background: rgba(0, 0, 0, 0.6);`
  - `display: flex;`
  - `justify-content: center;`
  - `align-items: center;`
  - `z-index: 999;`
  - `backdrop-filter: blur(8px);`

- **Inner Popup Styles:**
  - `background-color: #fff;`
  - `padding: 40px 30px;`
  - `border-radius: 12px;`
  - `box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);`
  - `text-align: center;`
  - `max-width: 400px;`
  - `width: 90%;`
  - `animation: popupFadeIn 0.4s ease-in-out;`

- **Title Styles:**
  - `color: #4CAF50;`
  - `font-size: 24px;`
  - `margin-bottom: 15px;`

- **Paragraph Styles:**
  - `font-size: 16px;`
  - `color: #333;`
  - `margin-bottom: 20px;`
  - `line-height: 1.5;`

- **Button Styles:**
  - `background-color: #4CAF50;`
  - `color: white;`
  - `border: none;`
  - `padding: 12px 25px;`
  - `border-radius: 8px;`
  - `cursor: pointer;`
  - `font-size: 16px;`
  - `font-weight: 600;`
  - `transition: background-color 0.3s ease, transform 0.2s ease;`

  - **Button Hover:**
    - `background-color: #45a049;`
    - `transform: translateY(-2px);`

  - **Button Active:**
    - `background-color: #3e8e41;`
    - `transform: translateY(0);`

- **Responsive Styles:**
  - Adjustments for screens with a maximum width of 600px.

- **Animation:**
  - `@keyframes popupFadeIn` for fade-in effect.



