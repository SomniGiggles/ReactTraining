import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
        <h1>Classic Cinema Company</h1>
        <Header />
        <Home />
        <Schedule />
        <Signup />
        <Footer />
    </div>
  );
}

export default App;
