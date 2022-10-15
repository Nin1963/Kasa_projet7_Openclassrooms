import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Housing from './pages/Housing/Housing'
import Error from './pages/Error/Error'
import About from './pages/About/About';
import './App.css';
import Header from './components/Header/Header';
import'./components/Header/Header.css'
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'

function App() {
  return (
    <Router>
      <div className='home'>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
