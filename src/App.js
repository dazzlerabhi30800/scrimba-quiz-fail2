import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'
import Header from './Components/Header'
import QuizPage from './Components/QuizPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"  element={<Header />} />
          <Route path="/about"  element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
