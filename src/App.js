import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Mid from './components/Mid';
import { createContext, useReducer } from 'react';
import { initialState, reducer, userTypeReducer } from './reducer/UseReducer';
import { ToastContainer } from 'react-toastify';

export const UserContext = createContext();
export const UserTypeContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(userTypeReducer, initialState);
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <UserTypeContext.Provider value={{state2, dispatch2}}>
          <BrowserRouter>
            <Header/>
            <ToastContainer/>
            <Mid/>
          </BrowserRouter>
        </UserTypeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
