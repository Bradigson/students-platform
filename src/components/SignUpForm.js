import '../assets/styles/SignUpForm.scss';
import '../assets/styles/SignUpResponsive.scss';
import signUpImg from '../assets/imgs/darkMode/signupImg.svg';
import signUpImgLight from '../assets/imgs/lightMode/signUpImg.svg';
import { handleInvalidEmail, handleEmailExist, 
        handlePassword6carcter, handleUserSuccess } from '../alerts/SignUpAlertValidation';
import { handleInvalidEmailLight, handleEmailExistLight, 
        handlePassword6carcterLight, handleUserSuccessLight } from '../alerts/SignUpAlertValidation';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { handleEmptyInputEmail, handleEmptyInputPassword, 
        handleEmptyInputEmailLight, handleEmptyInputPasswordLight } from '../alerts/SignUpAlert';
import app from '../firebase/Credenciales';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);

const SignUpForm = (props)=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
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
                await createUserWithEmailAndPassword(auth, Email, Password);
                if(darkMode){
                    handleUserSuccess();
                    setEmail('');
                    setPassword('');    
                }else{
                    handleUserSuccessLight();
                    setEmail('');
                    setPassword('');
                }
                
            }catch(err){
                if(err.code === 'auth/invalid-email'){
                    if(darkMode){
                        handleInvalidEmail();
                        setEmail('');
                    }else{
                        handleInvalidEmailLight();
                        setEmail('');
                    }
                }else if(err.code === 'auth/email-already-in-use'){
                    if(darkMode){
                        handleEmailExist();
                        setEmail('');
                    }else{
                        handleEmailExistLight();
                        setEmail('');
                    }
                }
                else if(Password.length < 6 ){
                    if(darkMode){
                        handlePassword6carcter();
                    }else{
                        handlePassword6carcterLight();
                    }

                }
                else if(err.code === 'auth/weak-password'){
                    if(darkMode){
                        handlePassword6carcter();
                    }else{
                        handlePassword6carcterLight();
                    }
                }
            }
        }
    }


    const handleDarkMode = ()=>{
        setDarkMode(!darkMode);
    }

    return(
        <div className={`${darkMode ? 'signuoform-container' : 'signuoform-container-light'}`}>
            <div className={`${darkMode ? 'signuoform-container__darkMode' : 'signuoform-container__darkMode-light'}`}>
                <button className={`${darkMode ? 'btn btn-darkMode' 
                : 'btn btn-darkMode-light' }`} onClick={handleDarkMode}>{darkMode ? <i className='bx bx-sun' ></i> 
                :<i className='bx bxs-moon' ></i> }</button>
            </div>
            <div className={`${darkMode ? 'signuoform-container__img' : 'signuoform-container__img-light'}`}>
                <img src={`${darkMode ?  signUpImg : signUpImgLight }`} alt=''/>
            </div>
            <form className={`${darkMode ? 'signuoform-container__form' : 'signuoform-container__form-light'}`} 
                    onSubmit={handleSubmit}>
                <div className='signuoform-container-form__title'>
                    <h2 className={`${darkMode ? 'text-white' :''}`}>Create Account</h2>
                    <p className='text-muted'>Please signup to continue.</p>
                </div>
                <div className={`${darkMode ? 'input-group mt-3 signuoform-container-form__input' 
                : 'input-group mt-3 signuoform-container-form__input-light'}`}>
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

                <div className={`${darkMode ? 'input-group mt-4 signuoform-container-form__input' 
                : 'input-group mt-4 signuoform-container-form__input-light' }`}>
                    <span className="input-group-text text-muted" id="basic-addon1">
                        <i className='bx bx-lock-alt'></i>
                    </span>

                    <input
                    type='password'
                    className="form-control"
                    placeholder="password"
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    />
                </div>
                <div className={`${darkMode ? 'mt-4 text-center signuoform-container-form__button'
                : 'mt-4 text-center signuoform-container-form__button-light'}`}>
                    <button className="btn">SIGN UP</button>
                </div>
                <div className='mt-4'>
                    <footer className='signuoform-container-form__footer'>
                        <p className='me-2 text-muted'>Already have an account?</p>
                        <Link to='/'>Log in</Link>
                    </footer>
                </div>
            </form>
        </div>
    )
}


export default SignUpForm;