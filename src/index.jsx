import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Students from './pages/Students';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
