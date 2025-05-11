import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Main2 from './components/Main2'; // Make sure to import Main2
import Footer from './components/Footer';
import Nav2 from './components/Nav2';
import Electronics from './components/Electronics';
import Clothing from './components/Clothing';
import Login from './components/Login'; // Import the Login component
import { AuthProvider } from './context/AuthContext';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import SearchResults from './components/SearchResults'; // Import the SearchResults component
import Books from './components/Books'; // Import the Books component

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Router should wrap ALL routing components */}
        <div className="flex flex-col min-h-screen">
          <Navbar />



          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/shop" element={<Main2 />} />
              <Route path="/category/electronics" element={<Electronics />} />
              <Route path="/category/clothing" element={<Clothing />} />
              <Route path="/category/home" element={<Main />} />
              <Route path="/category/books" element={<Books />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;