import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
// Footer for test


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          < Nav/>
          hola mundo
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
