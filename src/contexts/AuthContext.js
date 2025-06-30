import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children  }) => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setuser] = useState(null);

    useEffect(()=>{
         const storedData = JSON.parse(localStorage.getItem('signupData'));
         if(storedData?.is_loggedin){
            setLoggedIn(true);
            setuser(storedData);

         }
    },[])
   

    const logout = () => {
        setLoggedIn(false);
        setuser(null);
        const oldData = JSON.parse(localStorage.getItem("signupData"));
        localStorage.setItem("signupData",JSON.stringify({...oldData,is_loggedin:false}))

    }
    const login = (userData) => {
        setLoggedIn(true);
        setuser(userData);
        localStorage.setItem("signupData",JSON.stringify({...userData,is_loggedin:true}));
     }

    return (
        <>
        <AuthContext.Provider value={{isLoggedIn, user, login, logout }} >
            {children }
        </AuthContext.Provider>
        </>
    );

};

export default AuthProvider;

