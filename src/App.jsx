import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SignIn from './features/auth/pages/SignIn';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

