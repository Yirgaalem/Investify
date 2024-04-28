'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import PageLayout from '../../layout/pageLayout';
import Link from 'next/link';
import google from '../../public/icons/google-icon.svg';
import Image from 'next/image';
import './register.css';

export default function UserSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json", 
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };
  
  const [isActive, setIsActive] = useState(true);
  let headerText = isActive ? "Let's Go" : 'Get Started';
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
              
              <form
                onSubmit={handleSubmit}
                method="post"
              >
                <div className="createAccountHeader">Create Account</div>
                
                <input id="name"
                      name="name"
                      type="text"
                      placeholder="Username" 
                      onChange={handleChange}
                      required={true}
                      value={formData.name}
                />
                <input id="email"
                      name="email"
                      type="text"
                      placeholder="Email" 
                      onChange={handleChange}
                      required={true}
                      value={formData.email}
                />
                <input  id="password"
                      name="password"
                      type="password"
                      placeholder="Password" 
                      onChange={handleChange}
                      required={true}
                      value={formData.password}
                />
                <input
                    type="submit"
                    value="Sign Up"
                    className="button"
                  />

                <div className='line'></div>
                
                <button className='social-icons'>
                  <Image className="google" src={google} alt='Google Image'/>
                  Sign in with Google
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
                
                </div>
            </div>
        </div>
        </div>
        <p className="text-red-500">{errorMessage}</p>

      </PageLayout>
  );
}