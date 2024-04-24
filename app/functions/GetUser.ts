'use client'
import { useEffect } from "react";
import { useUserContext } from "./Context/UserContext";
import { getSession } from "next-auth/react";

const GetUser = () => {
  const {user, setUser} = useUserContext();

  useEffect( () => {
    const fetchUser = async () => {
      
      try {
        const userEmail: string | null | undefined = await getUserEmail();
        const res = await fetch(`/api/Users`, {
          method: 'GET',
        }); 
  
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await res.json();
        setUser(result.user.filter(item => item.email===userEmail));
  
      } catch (error) {
        console.log('fail')
        console.log(error);
      }
    }
    fetchUser();
    }, []); 
  if (user != undefined) return user;
}

const getUserEmail = async () => {
  const session = await getSession();
  return session?.user?.email;;
}

export default GetUser;
