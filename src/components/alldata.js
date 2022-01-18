import React, { useState, Fragment,  useContext, useEffect } from "react";
import { accountAPI } from "../services";
import { AuthContextFB } from "../contexts/AuthContextFB";

export default function AllData() {
    const { authFB } = useContext(AuthContextFB);  
    const[user, setUser] = useState('');
    const getAccount = async () => {
        try {
          if (authFB) {
            const response = await accountAPI.getUser(authFB.uid);
            return response.data;
          }
          } catch (error) {
              console.log(error);
              return
          }   
      }
    
    const handle = () => {
      let user;
      getAccount().then(data => {
        user = data.filter(user => user.firebaseId === authFB.uid)
          setUser(user[0])
      })
    }
    
    useEffect(() => {
        handle();
    }, [authFB])

    return (
        <Fragment>
            <div className="card text-center">
                
                <div className="card-header">
                    <h5>User profile</h5>
                </div>
                <div className="card-body">
                <table className="table">
                    <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Last transaction</th>
                        <th scope="col">Balance</th>
                    </tr>
                    </thead>
                    <tbody >
                    {
                        authFB &&
                        <tr >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.updated_at}</td>
                            <td>{user.balance}</td>
                        </tr>
         
                    }
                    </tbody>
                </table>
                </div>
                <div className="card-footer text-muted">
                Up to date
                </div>
            </div>
        </Fragment>
       
    )
}