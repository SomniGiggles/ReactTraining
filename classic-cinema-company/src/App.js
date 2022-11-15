import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
        <h1>Classic Cinema Company</h1>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/schedule' element={<Schedule />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='*' element={<Home />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
