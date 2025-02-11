import Header from "./components/Header";
import Products from "./components/Products";
import { ContextApiProvider } from "./context/useContextApp";

function App() {
  return (
    <ContextApiProvider>
    <div>
     <Header/>
     <Products/>
    </div>
    </ContextApiProvider>
  );
}

export default App;
