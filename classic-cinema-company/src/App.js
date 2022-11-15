import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
        <h1>Classic Cinema Company</h1>
        <Header />
        <Home />
        <Schedule />
        <SignUp />
        <Footer />
    </div>
  );
}

export default App;
