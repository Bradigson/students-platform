import '../assets/styles/SignUpForm.scss';
import signUpImg from '../assets/imgs/darkMode/signupImg.svg';
import signUpImgLight from '../assets/imgs/lightMode/signUpImg.svg';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { handleEmptyInputEmail, handleEmptyInputPassword, 
        handleEmptyInputEmailLight, handleEmptyInputPasswordLight } from '../alerts/SignUpAlert';

const SignUpForm = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
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
            <div className={`${darkMode ? 'ignuoform-container__img' : 'ignuoform-container__img-light'}`}>
                <img src={`${darkMode ?  signUpImg : signUpImgLight }`} alt=''/>
            </div>
            <form className='signuoform-container__form' onSubmit={handleSubmit}>
                <div className='signuoform-container-form__title'>
                    <h2 className={`${darkMode ? 'text-white' :''}`}>Create Account</h2>
                    <p className='text-muted'>Please Login to continue.</p>
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
                    valuee={password}
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
                        <Link to=''>Sign in</Link>
                    </footer>
                </div>
            </form>
        </div>
    )
}


export default SignUpForm;