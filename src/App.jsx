import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import { ContextApiProvider } from "./context/useContextApp";
import Cart from "./components/Cart";  

function App() {
  return (
    <ContextApiProvider>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
     </Router>
    </ContextApiProvider>
  );
}

export default App;
