# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
                                                               <!-- description of react app  -->






                                                               # Multi-Step Form React Application

This project implements a multi-step form with three steps and includes various features like validation, navigation, state management, and responsiveness. The form collects Personal Information, Address Information, and allows for a final Confirmation step.

## Features

### 1. Form Structure
- **Step 1: Personal Information**
  - Fields: Name, Email, Phone
- **Step 2: Address Information**
  - Fields: Address Line 1, Address Line 2, City, State, Zip Code
- **Step 3: Confirmation**
  - Displays a review of all entered data

### 2. Navigation and Buttons
- Tabbed navigation to switch between steps.
- The **back button** is disabled on the first step.
- The **next button** is disabled on the last step and replaced with a submit button.

### 3. Validation
- Client-side validation ensures all fields are filled before moving to the next step.
- Error messages are displayed for empty or invalid fields (e.g., incorrect email format).
- Highlighting for fields with errors.

### 4. State Management
- Managed form data using React state.
- Used hooks like `useState` and `useEffect` for dynamic state updates.
- User inputs and form navigation reflect updates in state.

### 5. Local Storage
- Data entered is persisted to local storage when navigating between steps.
- Pre-fills form fields if the user revisits the form.

### 6. Responsive Design
- The form is fully responsive and works well on desktop, tablet, and mobile screens.
- Uses CSS for styling and a CSS framework (e.g., Bootstrap or Material UI) for layout and responsiveness.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd multi-step-form
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure
```
.
├── src
│   ├── components
│   │   ├── Step1PersonalInfo.js
│   │   ├── Step2AddressInfo.js
│   │   ├── Step3Confirmation.js
│   │   ├── FormNavigation.js
│   │   └── ErrorMessage.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── public
│   └── index.html
└── package.json
```

## Usage
1. Fill in the fields on each step of the form.
2. Navigate between steps using the tabs or navigation buttons.
3. Review all entered data on the Confirmation step.
4. Submit the form on the final step.

## Dependencies
- React 18
- Node.js (v18.20.6)
- npm (v10.8.2)
- CSS Framework: Bootstrap or Material UI (optional)

## Local Storage
- Form data is saved to local storage when moving between steps.
- Data is retrieved and pre-filled if the form is revisited.

## Responsive Design
- The layout adjusts for different screen sizes (desktop, tablet, and mobile).

## Customization
You can customize field labels, styles, and validation rules in the respective components.

## Scripts
- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
Feel free to contribute to this project or raise issues for enhancements or bugs.





