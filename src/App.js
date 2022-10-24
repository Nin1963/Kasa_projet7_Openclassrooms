import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Housing from './pages/Housing/Housing'
import Error from './pages/Error/Error'
import About from './pages/About/About';
import Header from './components/Header/Header';
import'./components/Header/Header.css'
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
          <Route path="/housing/*" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
