import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AddUser from './pages/AddUser';
import Header from './components/Header';
import Footer from './components/Footer';
import EditUser from './pages/EditUser';

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} /> {/* Adicione esta linha */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
