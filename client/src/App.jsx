import TaskForm from '../components/TaskForm';
import Gallery from '../components/Gallery';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  const isAuthenticated = !!sessionStorage.getItem('token');

  const handleLogout = () => {
      sessionStorage.removeItem('token'); // Remove the "key"
      window.location.href = '/login'; // Force redirect to login
    } ;

  return(
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Task Gallery</h1>
          <p>Upload a photo to give your to-do context</p>
        </header>

        <Routes>
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!isAuthenticated ? <Login />: <Navigate to = "/" />} />
          <Route 
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <section  className="form-selection"><TaskForm /></section>
                  <hr className="divider" />
                  <section className="gallery-section"><Gallery /></section>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>   
  );
}

export default App;