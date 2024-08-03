import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './vendorDashboard/contexts/UserContext.jsx'; // Import the UserProvider
import { ThemeProvider } from './vendorDashboard/contexts/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* Wrap App with UserProvider */}
      <ThemeProvider>
      <App />
    </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
