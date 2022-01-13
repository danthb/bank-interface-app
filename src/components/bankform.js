import React, { Fragment, useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { AuthContextFB } from "../contexts/AuthContextFB";
import {Card} from "../contexts/context";
import { accountAPI } from "../services";
export default function BankForm({bgcolor,bgheader,label,handle,hideAmount,successButton}){

  const { authFB } = useContext(AuthContextFB);
  
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [amount, setAmount]       = useState('');
  const [balance, setBalance] = useState('');
  const [userLoged, setUserLogged] = useState('');

// UserData
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');


  const getBalance = async () => {
    try {
      if (authFB) {
        const response = await accountAPI.all();
        setUserLogged(true)
        return response.data;
      }
      else {
        setUserLogged(false)
        setBalance(false)
      }
    }catch (error) {
          console.log(error);
          return
      }   
  }
  useEffect(() => {
    if (!hideAmount) {
      getBalance().then(data => {
        let user = data.filter(user => user.firebaseId === authFB.uid)
        setBalance(user[0].balance)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  function validateDataUser(field, label){
    if (!field) {
      setStatus('Please enter ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Please enter at least 8 characters');
      setTimeout(() => setStatus(''),3000);
      return false
    }
    return true;
  }
  function handleForm(){
    if (hideAmount) {
      if (label !== 'Login') {
        if (!validateDataUser(name,     'name')) return;
      }
      if (!validateDataUser(email,    'email'))    return;
      if (!validateDataUser(password, 'password')) return;
    } else {
      if (!validateDataUser(amount, 'amount')) return;
    }
    let dataUser = {name,email,password,amount}
    handle(dataUser)
    setShow(false);
  }
  const handleAmount = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setAmount(e.target.value)
    } else {
      alert('Only positive amounts are allowed')
    }
  }
  

  function clean(){
    setName('');
    setEmail('');
    setPassword('');
    setAmount('');
    setShow(true);
  }
  
  const buttonDisabled = () => {
    if (label === 'Create Account') {
      if (email !== '' || password !== '' || name !== '') {
        return false
      } else {
        return true
      }
    }
    if (label === 'Login') {
      if (email !== '' || password !== '') {
        return false
      } else {
        return true
      }
    }
    // buttonDisabled when there isn't user logged
    if (!hideAmount) {
      if (label === 'Withdraw') {
        if (!balance || !userLoged) {
          return true
        }
        if (amount !== '') {
          if (amount !== 0) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      } else if (label === 'Deposit') {
        if (!userLoged) {
          return true
        }
        if (amount !== '') {
          if (amount !== 0) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      }
    } else if (balance) {
      if (balance <= 0) {
        return true
      }
    } else {
      return false
    }
  }
  
  return(
      <Card
            bgcolor={bgcolor}
            bgheader={bgheader}
            header={label}
            status={status}
            body={show ? (
                <Fragment>
                {
                  hideAmount
                  ? <Fragment>
                    {label !== 'Login' &&
                    <Fragment>
                      Name
                        <br />
                        <TextField
                          name='name'
                          id="name"
                          placeholder="Enter name"
                          value={name}
                          onChange={e => setName(e.currentTarget.value)} />
                        <br />
                    </Fragment>
                      }
                      <br />
                      Email <br/>
                      <TextField
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}/>
                      <br />
                      <br />
                      Password<br />
                      <TextField
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)} />
                      <br />
                  </Fragment>
                  :
                  <Fragment>
                    Balance: {userLoged ? balance : null} <br/>
                    <br />
                    {label + ' Amount'}
                    <br />
                      <input
                        type="input"
                        id="amount"
                        placeholder={'Enter Amount'}
                        value={amount}
                        onChange={handleAmount} />
                      <br />
                  </Fragment>
                }
                <br />
                <Button
                  type="submit"
                  id='submit'
                  title={(label === 'Withdraw' || label === 'Deposit' ) ? 'Confirm transaction' : 'Click to Login'}
                  variant="contained"
                  color="primary"
                  disabled={buttonDisabled()}
                  onClick={handleForm} >
                  {label}
                </Button>
                </Fragment>
              ):(
                <Fragment>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={clean}>
                    {successButton}
                  </Button>
                  {label === 'Create Account' ? <Button
                    type="submit"
                    variant="contained"
                    title='Click to go the Login'
                    color="secundary">
                    <Link className="nav-link" to="/login">Login</Link>
                  </Button> : null}
                </Fragment>
            )}
            />
       

  )
}