import React, { Fragment, useEffect, useState, useContext} from 'react';
import BankForm from './bankform';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';
import { AuthContextFB } from '../contexts/AuthContextFB';

export default function Login() {
  const [currenUser, setCurrentUser] = useState(null)
  const [userNotFound, setUserNotFound] = useState(false)
  const history = useHistory();
  const { authFB, loginFB } = useContext(AuthContextFB)
  
  useEffect(() => {
    setCurrentUser(authFB)
    console.log('userChanged', authFB)
  }, [authFB])
  
  async function handle(data) {
    console.log(data)
    await loginFB(data.email, data.password)
      .then(() => {
        if(authFB){
          setCurrentUser(authFB)
          setUserNotFound(false)
          history.push('/')
        }
        else {
          setUserNotFound(true)
        }
      })
  }
    return (
      <Fragment>
        <Router>
          <Switch>
            {
              !currenUser ?
              <Fragment>
                <BankForm
                  bgcolor="black"
                  txtcolor='white'
                  label="Login"
                  handle={handle}
                  hideAmount={true}
                  successButton="Try Again"
                />
              {
                userNotFound &&
                <p style={{textAlign: 'center'}}>Please register</p> 
              }
              </Fragment>
                : <Fragment>
                  <h3>Welcome { currenUser.email}</h3>
                  <h5>You are logged in Badbank</h5>
                  
              </Fragment>
            }
            </Switch>
            </Router>
        </Fragment>
        
    )
    
}
