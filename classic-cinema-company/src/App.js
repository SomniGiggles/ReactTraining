import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Schedule from './components/schedule';
import Signup from './components/signup';

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
