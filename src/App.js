
import './App.css';

import { Form } from "./components/Form";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';


function App() {
const client = new QueryClient({
  defaultOptions: {
      queries:{
        refetchtOnWindowFocus: false,
      }
  }
}); 
  return (
    <div className = "App">

      <Form />

      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path="/menu" element = {<Menu />} />
          <Route path ="/contact" element = { <Contact />} />
          <Route path='*' element ={ <h1>Page Not Found</h1>} />
        </Routes>
      </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;
