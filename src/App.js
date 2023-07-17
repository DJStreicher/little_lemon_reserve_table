import './App.css';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
