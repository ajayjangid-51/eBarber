import { useState } from "react";

const SignIn = ()=>{
    const [signInEmail , setSignInEmail] = useState("");
    const [signInPassword , setSignInPassword]  = useState("");
    const [signInRemember , setSignInRemember] = useState();

    const fn = (e)=>{
        e.preventDefault();
        console.log(signInEmail);
        console.log(signInPassword);
        console.log(signInRemember);
    }
    return (
        <div className="signin">
            i am signin
            <h1>Welcome!</h1>
            <h4>Sign in to continue</h4>
            <form>
                <input type="email" name="signInEmail" id="" onChange={(e)=>{setSignInEmail(e.target.value)}} />
                <input type="password" name="signInPassword" id="" onChange={(e)=>{setSignInPassword(e.target.value)}}  />
                <input type="checkbox" name="" id="checkBox"  onChange={(e)=>{setSignInRemember(e.target.value)}} />
                <label htmlFor="checkBox">Remember me</label>
                <button onClick={fn} >Sign in</button>


            </form>
                <span>or Continue with</span>
                <span>facebook</span><span>google </span><span>twitter</span>
                <span>Forgot your password</span>
                <span>Don't have an account?</span> 
                <span>Sign up</span>
        </div>
    )
}
export default SignIn;