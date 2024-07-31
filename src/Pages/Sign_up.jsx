import React from "react";
import SignUpComponent from "../authentication/SignUp";
import LoginG from "../authentication/Login";
import SignupG from "../authentication/signupG"

function Sign_up() {
  return (
    <div className="py-8">
            <SignUpComponent/>
            <SignupG/>

    </div>
  );
}

export default Sign_up;
