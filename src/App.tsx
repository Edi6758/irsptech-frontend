import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AddUser from './pages/AddUser';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
