import { useState, createContext, useEffect } from 'react';
import firebase from './firebaseConfig'
import { useHistory } from 'react-router-dom'

export const AuthContextFB = createContext({})
export const AuthProviderFB = ({ children }) => {
    
  const [authFB, setAuthFB] = useState(null)
  const history = useHistory()
    
    const loginFB = async (email, password) => {
        try {
            const userCredential = await firebase.login(email, password)
            const user = userCredential.user
            user.getIdToken().then(token => {
              localStorage.setItem('token', token)  
            }) 
          setAuthFB(user)
          
        } catch (error) {
            console.log(error)
        }
    }

    const logoutFB = async () => {
        try {
          await firebase.logout()
          setAuthFB(null)
          history('/')
        } catch (err) {
          console.log(err.message)
        }
      }
  useEffect(() => {
    return firebase.getAuth().onAuthStateChanged(user => {
      setAuthFB(user)
      
    })
  }, [])
    return (
        <AuthContextFB.Provider value={{ authFB, setAuthFB, loginFB, logoutFB }}>
            {children}
        </AuthContextFB.Provider>
    )
}

