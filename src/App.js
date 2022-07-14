import Login from './component/dangNhap/Login';
import './component/dangNhap/login.scss'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [colors, setColor] = useState('');
  return (
    <>
      <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route exact path="" component={Login} />
           
          </Routes>
        </BrowserRouter>
        <Login />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
