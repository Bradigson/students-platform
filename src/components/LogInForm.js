import { useState } from "react";
import {Link } from 'react-router-dom';
import LogInImg from '../assets/imgs/darkMode/logInImg.svg';
import LogInImgLight from '../assets/imgs/lightMode/logInImg.svg';
import '../assets/styles/LogInForm.scss';
import '../assets/styles/LogInResponsive.scss';
import { handleIncorrectPassword, handleUserNotFound, handleWelcome,
handleIncorrectPasswordlight, handleUserNotFoundlight, handleWelcomelight } from "../alerts/LogInAlertValidation";
import { handleEmptyInputEmail, handleEmptyInputPassword, 
        handleEmptyInputEmailLight, handleEmptyInputPasswordLight } from "../alerts/SignUpAlert";
import app from "../firebase/Credenciales";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app)

const LogInForm = (props)=>{

    const [darkMode, setDarkMode] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    
    const handleEmail = e=>{
        setEmail(e.target.value);
    }
    const handlePassword = e=>{
        setPassword(e.target.value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const Email = email;
        const Password = password;

        if(email === ''){
            if(darkMode){
                handleEmptyInputEmail();
            }else{
                handleEmptyInputEmailLight();
            }
        }else if(password === ''){
            if(darkMode){
                handleEmptyInputPassword();
            }else{
                handleEmptyInputPasswordLight();
            }
        }else{
            try{
                await signInWithEmailAndPassword(auth, Email, Password);
                if(darkMode){
                    handleWelcome();
                    setEmail('');
                    setPassword('')
                }else{
                    handleWelcomelight();
                    setEmail('');
                    setPassword('')
                }
            }catch(err){
                if(err.code === 'auth/user-not-found'){
                    if(darkMode){
                        handleUserNotFound();
                        setEmail('');
                        setPassword('')
                    }else{
                        handleUserNotFoundlight();
                        setEmail('');
                        setPassword('')
                    }
                }else if(err.code === 'auth/wrong-password'){
                    if(darkMode){
                        handleIncorrectPassword();
                        setEmail('');
                        setPassword('')

                    }else{
                        handleIncorrectPasswordlight();
                        setEmail('');
                        setPassword('')
                    }
                }
            }
        }
    }
    const handleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
    return(
        <div className={`${darkMode ? 'loginform-container' : 'loginform-container-light'}`}>
            <div className={`${darkMode ? 'loginform-container__darkMode' : 'loginform-container__darkMode-light'}`}>
                <button className={`${darkMode ? 'btn btn-darkMode' 
                : 'btn btn-darkMode-light' }`} onClick={handleDarkMode}>{darkMode ? <i className='bx bx-sun' ></i> 
                :<i className='bx bxs-moon' ></i> }</button>
            </div>
            <div className={`${darkMode ? 'loginform-container__img' : 'loginform-container__img-light'}`}>
                <img src={`${darkMode ?  LogInImg : LogInImgLight }`} alt=''/>
            </div>
            <form className={`${darkMode ? 'loginform-container__form' : 'loginform-container__form-light'}`} 
            >
                <div className='loginform-container-form__title'>
                    <h2 className={`${darkMode ? 'text-white' :''}`}>Login</h2>
                    <p className='text-muted'>Please Login to continue.</p>
                </div>
                <div className={`${darkMode ? 'input-group mt-3 loginform-container-form__input' 
                : 'input-group mt-3 loginform-container-form__input-light'}`}>
                    <span className="input-group-text text-muted" id="basic-addon1">
                        <i className='bx bx-envelope'></i>
                    </span>

                    <input
                    type='text'
                    className="form-control"
                    placeholder="email"
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    />
                </div>

                <div className={`${darkMode ? 'input-group mt-4 loginform-container-form__input' 
                : 'input-group mt-4 loginform-container-form__input-light' }`}>
                    <span className="input-group-text text-muted" id="basic-addon1">
                        <i className='bx bx-lock-alt'></i>
                    </span>

                    <input
                    type='password'
                    className="form-control"
                    placeholder="password"
                    name='password'
                    valuee={password}
                    onChange={handlePassword}
                    />
                </div>
                <div className={`${darkMode ? 'mt-4 text-center loginform-container-form__button'
                : 'mt-4 text-center loginform-container-form__button-light'}`}>
                    <button className="btn" onClick={handleSubmit}>LOG IN</button>
                </div>
                <div className='mt-4'>
                    <footer className='loginform-container-form__footer'>
                        <p className='me-2 text-muted'>Don't have an account yet?</p>
                        <Link to='/signup'>Sign up</Link>
                    </footer>
                </div>
            </form>
        </div>
    )
}



export default LogInForm;