import { useState, useEffect } from 'react'
import { Button, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import './login.scss';
import md5 from 'md5';
function Register() {
    const [usernames, setUsername] = useState('');
    const [passwords, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [show, setShow] = useState(false);
    const [isVerified,setIsVerified] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();
  
    
    // const handleSubmit = () => {
   
    
    // }
    const handleDangKi=(e)=>{
        if(usernames.indexOf("'")>-1 || usernames.indexOf("=")>-1 ||usernames.indexOf("or")>-1 || usernames.indexOf("OR")>-1||usernames.indexOf("-")>-1||
        passwords.indexOf("'")>-1 || passwords.indexOf("=")>-1 ||passwords.indexOf("or")>-1 || passwords.indexOf("OR")>-1 || passwords.indexOf("-")>-1)
        {
            e.preventDefault();
            setUsername('');
            setPassword('');
            toast.error(`Vui lòng không nhập các kí tự đặc biệt " ' - =  or "`);
        }
        else if(usernames===''){
            e.preventDefault();
            toast.info("Vui lòng nhập thông tin");
        }
        
        else if(passwords.search(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
            e.preventDefault();
            toast.info("Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt");
        }
        else if(passwords!==confirm){
            e.preventDefault();
            toast.error("Mật khẩu không trùng khớp");
        }
        
        else{
            setPassword(md5(passwords));
            toast.success("Đăng kí thành công");
        }
    }
    const handleLogin=()=>{

       
        history.push("/");
    }

    return (

        <>
     
                <div className='login-background'>
                    <div className='login-container'>
                    <form method="POST" action="http://localhost:8080/account/register">
                        <div className='login-content row'>
                            <div className='col-12  text-login'>Register</div>
                            <div className='col-12 form-group login-input'>
                                <i className="fas fa-user-alt icon"></i>
                                <label className='input'>UserName</label>
                                <Input name="username" value={usernames} onChange={e => setUsername(e.target.value)} type='text' className='from-control' placeholder='Enter your usename' required autocomplete="off" />

                            </div>
                            <div className='col-12 form-group login-input'>
                                <i className="fas fa-lock icon"></i>
                                <label className='input'>PassWord</label>
                                <div className='custom-password' >
                                    <Input  name="password" value={passwords} onChange={e => setPassword(e.target.value)} type={show === false ? 'password' : 'text'} className='from-control' required placeholder='Enter your password' autocomplete="off"/>
                                    <span onClick={() => setShow(!show)}>
                                        {show && show === true ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}

                                    </span>
                                </div>

                            </div>
                            <div className='col-12 form-group login-input'>
                                <i className="fas fa-lock icon"></i>
                                <label className='input'>Confirm Password</label>
                                <div className='custom-password' >
                                    <Input  value={confirm} onChange={e => setConfirm(e.target.value)} type={show === false ? 'password' : 'text'} className='from-control' required placeholder='Confirm your password' autocomplete="off"/>
                                    <span onClick={() => setShow(!show)}>
                                        {show && show === true ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}

                                    </span>
                                </div>

                            </div>
                           
                            </div>
                            <div className='col-12'>
                                <button onClick={(e)=>handleDangKi(e)} className='btns' type="submit">Register</button>
                            </div>
                            <div className='col-12'>
                            <span  onClick={handleLogin} className='register'>Login</span>
                            </div>
                         
                          </form>
                        </div>


                    </div>
            
     
        </>
    )
}
export default Register;