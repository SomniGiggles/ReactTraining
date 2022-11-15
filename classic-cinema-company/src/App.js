import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import SignUp from './components/SignUp';
import ComingSoon from "./components/ComingSoon";
import YourVisit from "./components/YourVisit";
import BookTickets from "./components/BookTickets";

function App() {
  return (
    <div className="App main-background">
        <h1>Classic Cinema Company</h1>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/schedule' element={<Schedule />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/comingsoon' element={<ComingSoon />}></Route>
          <Route path='/yourvisit' element={<YourVisit />}></Route>
          <Route path='/booktickets' element={<BookTickets />}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
