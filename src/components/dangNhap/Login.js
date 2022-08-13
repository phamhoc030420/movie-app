import { useState, useEffect } from 'react'
import './login.scss'
import { Button, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"
import { withRouter } from 'react-router-dom'
import Home from '../../pages/Home';
import md5 from 'md5';
const callback = function () {};
const expiredCallback = function () {};
function Login() {
    const [usernames, setUsername] = useState('');
    const [passwords, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [isVerified,setIsVerified] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [exactly,setExactly]=useState(false);
    const history = useHistory();
    const [token,setToken]=useState([]);
    const [authen,setAuthen]=useState(3);
    const [count,setCount]=useState(30);
    let co=0;
    useEffect(() =>{
        localStorage.removeItem("accessToken"); 
    },[])
    // callapi login 
    const [apitest,setApiTest]=useState({
        username:'',
        password:'',
    });
    useEffect(() =>{
        
        axios.get('http://localhost:8080/account')
        .then(response => response.data)
        .then(data => {
            setApiTest(data);
        })
        .catch(err=>console.log(err));

    },[])
    const handleSubmit = () => {
        
      
            if(usernames.indexOf("'")>-1 || usernames.indexOf("=")>-1 ||usernames.indexOf("or")>-1 || usernames.indexOf("OR")>-1||usernames.indexOf("-")>-1||
            passwords.indexOf("'")>-1 || passwords.indexOf("=")>-1 ||passwords.indexOf("or")>-1 || passwords.indexOf("OR")>-1 || passwords.indexOf("-")>-1)
            {
                setAuthen(authen-1);
                setUsername('');
                setPassword('');
                toast.error(`Vui lòng không nhập các kí tự đặc biệt " ' - =  or "`);
            }else{
                // history.push(`/login/${usernames}-${passwords}`);
                for(let i=0;i<apitest.length;i++){
                    if(usernames===apitest[i].username && md5(passwords)===apitest[i].password){
                        co=1;         
                    }
                }
                if(co===1){
                    localStorage.setItem('accessToken',true);
                    toast.success("Login Success");
                    history.push("/home");
                }else{
                    setAuthen(authen-1);
                    setUsername('');
                    setPassword('');
                    toast.error("Login Fail");
                }
            }      
            setCount(30);   
    }
    if(authen===0){
        localStorage.setItem('authen',0);
    }
    if(localStorage.getItem('authen')==0){
        setTimeout(() =>{
            localStorage.removeItem('authen');
            setAuthen(3);
        },30000);
    }
  
    const handleCapcha=()=>{
        setIsVerified(true);
    }
    const handleRegister=()=>{
        history.push("/register");
    }
    useEffect(()=>{
       
       const time= setInterval(()=>{
            setCount(prev=>prev-1);
        },1000);
        return (()=>{
            clearInterval(time);
        })
    },[]) 
    return (
        <>          
               {localStorage.getItem('authen')==0?   
               <div id='oopss'>
               
                    <div id='error-text'>
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    <span>{count}</span>
                    <p className="p-a">Bạn đã đăng nhập thất bại quá số lần cho phép</p>
                    <p className="p-b">Vui lòng chờ để quay lại trang đăng nhập</p>
                    <a href='#' className="back">Đăng nhập</a>
                    </div>
                </div> 
               :
               <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12  text-login'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <i className="fas fa-user-alt icon"></i>
                                <label className='input'>UserName</label>
                                <Input value={usernames} required onChange={e => setUsername(e.target.value)} type='text' className='from-control' placeholder='Enter your usename' />

                            </div>
                            <div className='col-12 form-group login-input'>
                                <i className="fas fa-lock icon"></i>
                                <label className='input'>PassWord</label>
                                <div className='custom-password' >
                                    <Input value={passwords} required onChange={e => setPassword(e.target.value)} type={show === false ? 'password' : 'text'} className='from-control' placeholder='Enter your password' />
                                    <span onClick={() => setShow(!show)}>
                                        {show && show === true ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}

                                    </span>
                                </div>

                            </div>
                            <div className="col-12">
                                <ReCAPTCHA
                                sitekey="6Le0ee0gAAAAABfXfsyE3gvp5T9t0RZSDBKvnI3N"
                                locale="en"
                                onChange={handleCapcha}
                            
                                />
                            </div>
                            <div className='col-12'>
                                <Button disabled={!isVerified} className='btn btn-primary' onClick={handleSubmit}>Login</Button>
                            </div>
                            <div className='col-12'>
                                <span onClick={handleRegister} className='forgot'>Register an account</span>
                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span className='or'>Or Login with:</span>
                            </div>

                            <div className='col-12 text-center mt-2'>
                                <i className="fab fa-google-plus-g goggle"></i>
                                <i className="fab fa-facebook-f face"></i>
                            </div>
                          
                        </div>


                    </div>
                </div>
               }
        </>
    )
}
export default withRouter(Login);