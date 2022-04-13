import { useState } from "react";

const SignUp =()=>{
    const [signUpName , setSignUpName] = useState("");
    const [signUpEmail , setSignUpEmail] = useState("");
    const [signUpPassword , setSignUpPassword] = useState("");

    const fn = (e)=>{
        e.preventDefault();
        console.log(signUpName);
        console.log(signUpEmail);
        console.log(signUpPassword);
    }
    return (
        <div className="signup">
            <h1>SignUp</h1>
            <h4>Create a new account</h4>
            <form >
                <input type="text" name="" id="" onChange={(e)=>{
                    setSignUpName(e.target.value);
                }}  />
                <input type="email" name="" id="" onChange={(e)=>{
                    setSignUpEmail(e.target.value);
                }} />
                <input type="password" name="" id="" onChange={(e)=>{
                    setSignUpPassword(e.target.value);
                }}/>
                <button type="submit" onClick={fn} >Sign up</button>


            </form>
            <span>By continuing Sign up you agree to the following Terms&Conditions without reservation</span>
            <br />
            <span>Already have an account? </span>
            <h4>Sign in</h4>

        </div>
    )
}
export default SignUp;