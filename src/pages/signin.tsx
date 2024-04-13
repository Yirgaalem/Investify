"use client";
import { useState } from 'react';
// import "./register.css";
import Image from "next/image";
import google from '../../public/icons/google-icon.svg';
import Link from 'next/link';
import PageLayout from '@/Layouts/landingPageLayout/pageLayout';
import { getProviders } from 'next-auth/react';

export default function Signin({providers}:any) {

  const [isActive, setIsActive] = useState(false);
  let headerText = isActive ? "Let's Go" : 'Get Started';

  return (
    <>
   
      {Object.values(providers).map((provider:any) => (
        <button className='social-icons'>
          <Image className="google" src={google} alt='Google Image'/>
          Sign in with {provider.name}
        </button>
      ))}
                      
    </>
  );
  
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {providers},
  }
}