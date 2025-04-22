import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/Cartcontext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import ShopPage from './components/Productlisting';
import ProductPage from './components/Productdetail';
import CartPage from './components/Cart/Cart';
import CheckoutPage from './pages/Checkout';
import AccountPage from './pages/Accounts';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;