import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Schedule from './components/Schedule';
import SignUp from './components/SignUp';
import ComingSoon from "./components/ComingSoon";
import YourVisit from "./components/YourVisit";
import BookTickets from "./components/BookTickets";
import FilmDetail from './components/FilmDetail';

function App() {
  return (
    <div className="App main-background">
        <h1>Classic Cinema Company</h1>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/schedule' element={<Schedule />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/comingsoon' element={<ComingSoon />}></Route>
          <Route path='/yourvisit' element={<YourVisit />}></Route>
          <Route path='/booktickets' element={<BookTickets />}></Route>
          <Route path='/films/:id' element={<FilmDetail />}></Route>
          <Route path='*' element={<HomePage />}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
