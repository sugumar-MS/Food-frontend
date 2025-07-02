import { useContext, useState } from 'react';
import './loginpopup.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Signup")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (e) =>{
       setData(data=>({...data,[e.target.name]:e.target.value}))
    }

    // useEffect(()=>{
    //    console.log(data);
    // },[data])

    const onLogin = async (e) => {
       e.preventDefault();
       let newUrl = url;
       if(currState==="Login"){
        newUrl += "/api/user/login"
       }
       else{
        newUrl += "/api/user/register"
       }
       const res = await axios.post(newUrl,data);

       if(res.data.success){
         setToken(res.data.token)
         localStorage.setItem("token",res.data.token);
         setShowLogin(false);
       }
       else{
        alert(res.data.message)
       }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <p className='cross' onClick={()=>setShowLogin(false)}>X</p>
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' name="name" onChange={onChangeHandler} value={data.name} required />}
            <input type="email" placeholder='Your email' name="email" onChange={onChangeHandler} value={data.email} required />
            <input type="password" placeholder='Your password' name="password" onChange={onChangeHandler} value={data.password} required />
        </div>
        <button type='Submit'>{currState==="Signup"? "Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Signup")}>Click here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
