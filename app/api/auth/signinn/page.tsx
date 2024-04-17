"use client";
import { useState } from 'react';
import "./register.css";
import Image from "next/image";
import google from '../../../../public/icons/google-icon.svg'
import Link from 'next/link';
import PageLayout from '../../../../layout/pageLayout';

export default function Login() {

  const [isActive, setIsActive] = useState<Boolean>(false);
  let headerText: string = isActive ? "Let's Go" : 'Get Started';

  return (
    <PageLayout>
      <div className="headerContainer">
        <div className="investify">Investify</div>
        
        <div className="home">
          <Link href={'/'}>
            <button>Home</button>
          </Link>
        </div>
      </div>

      <div className="tabContainer">
        <div className="headerText">{headerText}</div>

        <div className={`container ${isActive ? 'active':''}`} id="container">
          <div className="form-container sign-up">
              <form>
                  <div className="createAccountHeader">Create Account</div>
                  
                  <input type="text" placeholder="Username"/>
                  <input type="email" placeholder="Email"/>
                  <input type="password" placeholder="Password"/>

                  <button className="button">Sign Up</button>

                  <div className='line'></div>
                 
                  <button type='submit' className='social-icons'>
                    <Image className="google" src={google} alt='Google Image'/>
                    Sign in with Google
                  </button>
                  
              </form>
          </div>
         
          <div className="form-container sign-in">
              <form>
                  <div className="signInHeader">Sign In</div>
                  <input type="email" placeholder="Email"/>
                  <input type="password" placeholder="Password"/>
                  <a href="#">Forget Your Password?</a>
                  
                  <button className="button signInButton">Sign In</button>
                  <div className="line"></div>
                  
                  <button type='submit' className='social-icons'>
                    <Image className="google" src={google} alt='Google Image'/>
                    Log in with Google
                  </button>
                  
              </form>
          </div>

          <div className="toggle-container">
              <div className="toggle">
                  
                  <div className="toggle-panel toggle-left">
                      <div className="account">Have an account?</div>
                      <p>Login and continue managing your investments</p>
                      <button className="button" id="login" onClick={() => {setIsActive(!isActive)}}>Sign In</button>{/*both this and the reigster sign up button className="hidden"*/} 
                  </div>

                  <div className="toggle-panel toggle-right">
                      <div className="welcome">Welcome!</div>
                      <p>Sign up today and watch your investments take flight!</p>
                      <button className="button" id="register" onClick={() => {setIsActive(!isActive)}}>Sign Up</button>
                  </div>
              
              </div>
          </div>
      </div>
      </div>
    </PageLayout>
  );
  
}

// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return {
//     props: {providers},
//   }
// }