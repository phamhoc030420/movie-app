import './App.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import { Switch, Route,Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import Login from './components/dangNhap/Login';
import Register from './components/dangNhap/Register'
import { Redirect } from 'react-router-dom';
function App() {
  return (
    <>
    
      <Switch>
            <Route path='/'
                exact
                component={Login}
            />
            <Route path='/login/:user'
                component={Login}
            />
             <Route path='/home'          
              render={()=>{
                return localStorage.getItem('accessToken')? <Home />:<Redirect to='/' />
              }
              }
            />
              <Route path='/register'
                exact
                component={Register}
            />
        </Switch>

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
    </>
  );
}

export default App;
