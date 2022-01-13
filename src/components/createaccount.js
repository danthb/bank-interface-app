import React from "react";
import { accountAPI } from "../services";
import BankForm from "./bankform";

export default function CreateAccount() {

    async function handle(newUser){
      try {
        const { status } = await accountAPI.createUser(newUser);
        if (status === 200) {
          console.log('user created');
        }
      } catch (error) {
        console.log(error);
      }
      return true
    }
    return (

      <BankForm
        bgcolor="black"
        txtcolor='white'
        label="Create Account"
        handle={handle}
        hideAmount={true}
        successButton="Create another account"
    />
    )
  }