import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Mid from './components/Mid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Mid/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
