import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,updateProfile } from "firebase/auth";
import './Login.css'
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import initializeAuthentication from '../../component/Firebase/firebase.init';
import { useHistory, useLocation } from "react-router";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
initializeAuthentication();
const Login = () => {
    const {signinUsingGoogle, user} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState('')
    const auth = getAuth();
    const redirect_url = location.state?.from || '/'
    
    const handleGoogleLogin = () => {
      signinUsingGoogle()
      .then (result => {
          // console.log(result.user);
          history.push(redirect_url)
      })
      /* .catch (error => {
          setError(error.message);
      }) */
  }
  const handleRegistartion = e => {
    e.preventDefault();
    /* if (password.length < 6){
      setError('Password Must Be 6 charecters long')
      return;
    } */
    if (!/(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}/.test(password)){
      setError('Password Must Be 6 charecters long - Must Contain One uppercase letters - one special case letter - two digits - three lowercase letters', )
      return;
    }
    isLogin ? processLogin(email,password) : registerNewUser(email,password);
    
  }
  const processLogin = (email,password) => {
    signInWithEmailAndPassword(auth,email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('')
    })
    .catch((error) => {
      setError(error.message);
    });
  }
  const registerNewUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      verifyEmail();
      setUserName();
    })
    .catch(error => {
      setError(error.message)
    })
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const toggleLogIn = e => {
    setIsLogin(e.target.checked);
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then (result => {
      console.log(result);
    })
  }
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth,email)
    .then (result => {
      setError('An Email Sent to your Account')
    })
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const setUserName = () =>{
    updateProfile(auth.currentUser,{displayName: name})
    .then(result => {})
  }
    return (
        <div className="login-form mt-5 pt-5 ">
        <div className="">
        <form className=" " onSubmit={handleRegistartion}>
        <h3>Please {isLogin?'Login' : 'Register'}</h3>
        {!isLogin && <div>
          <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input onBlur={handleNameChange} type="text" className="form-control" id='inputName' placeholder='Your Name'/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputAddress" placeholder='1234 Main St'/>
            </div>
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registerd?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">{isLogin?'Log In':'Register'}</button>
        <button onClick={handleResetPassword} type='button' className="btn btn-secondary btn-sm ms-2" >Reset Password</button>
      </form>
          <br /><br /><br />
        </div>
      { !user.displayName ?
        <div> 
        <p>Or Signin with</p>
      <button className="btn btn-success" onClick={handleGoogleLogin}>Google</button>
      </div> : <div></div>}
      <br />
      {
        user.email && 
        <div className="text-center">
          <img src={user.img} alt="" />
          <h2>Welcome {user.displayName}</h2>
          <p>Continue your visit On our site</p>
          <HashLink to="/home">
          <Button className="btn btn-primary">Back to Home</Button>
          </HashLink>
        </div>
        
      }
      
    </div>
        
    );
};

export default Login;

