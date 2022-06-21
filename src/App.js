import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Hotel from './components/pages/Hotel/Hotel';
import HotelList from './components/pages/HotelList/HotelList';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotelList' element={<HotelList />} />
          <Route path='/hotel/:id' element={<Hotel />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
