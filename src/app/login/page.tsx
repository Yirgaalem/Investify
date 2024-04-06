import "./login.css";
import Image from "next/image";
import google from '../../../public/icons/google-icon.svg';

export default function Login() {

  /*const container: HTMLElement|null = document.getElementById('container');
  const registerButton: HTMLElement|null = document.getElementById('register');
  const loginButton: HTMLElement|null = document.getElementById('login');

  if (container) {
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        container.classList.add("active");
      });
    }
    if (loginButton) {
      loginButton.addEventListener('click', () => {
          container.classList.remove("active");
      });
    }
  } */
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon">
                      <Image className="google" src={google} alt='Google Image'/>
                    </a>
                </div>
                
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <button>Sign Up</button>
            </form>
        </div>
        
        <div className="form-container sign-in">
            <form>
                <div className="signInHeader">Sign In</div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                
                <button className="signInButton">Sign In</button>
                
                <div className="line"></div>
                <div className="social-icons">
                    <a href="#" className="icon">
                      <Image className="google" src={google} alt='Google Image'/>
                    </a>
                    Log in with Google
                </div>
            </form>
        </div>

        <div className="toggle-container">
            <div className="toggle">
                
                <div className="toggle-panel toggle-left">
                    <h1>Have an account?</h1>
                    <p>Login and continue managing your investments</p>
                    <button id="login">Sign In</button>{/*both this and the reigster sign up button className="hidden"*/} 
                </div>

                <div className="toggle-panel toggle-right">
                    <div className="welcome">Welcome!</div>
                    <p>Sign up today and watch your investments take flight!</p>
                    <button id="register">Sign Up</button>
                </div>
            
            </div>
        </div>
    </div>
    </>

  );
}