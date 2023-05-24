import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
 import BackgroundImage from "../components/BackgroundImage";
 import Header from "../components/Header";
 import background from "../assets/login.jpg";
import async from "hbs/lib/async";
import {firebaseAuth} from "../utils/firebase-config";
import { Navigate } from "react-router-dom";

//  function backgroundImage() {
//   return (
//     <img
//       src="../assets/login.jpg"
//       alt="bg"
//     />
//   );
// }

export default function Login() {
  //const [showPassword, setShowPassword]= useState(false);
  const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();


  // const [formValues,setFormValues]=useState({
  //   email:"",
  //   password:""
  // });

const handleLogin = async()=>{
  // console.log(formValues);
  try{
    //const {email,password}= formValues;
    await signInWithEmailAndPassword(firebaseAuth,email,password);
  }
  catch(err)
  {
    console.log(err.code);
  }
};

onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser)
  navigate("/");
})

  return (
    <Container>
      <BackgroundImage/>
        <div className="content">
          <Header/>
          <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
              <div className="title">
                <h3>Login</h3>
              </div>
              <div className="container flex column">
              <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
            // setFormValues({
            // ...formValues,
            // [e.target.name]:e.target.value,
            // })}
            
            />
          <input 
              type="password" 
              name="password" 
              id="" 
              placeholder="Password" 
              value={password} 
          onChange={(e)=> setPassword(e.target.value)}
            // setFormValues({
            // ...formValues,
            // [e.target.name]:e.target.value,
            // })}
              />
          
         
          
            <button onClick={handleLogin}>Login</button>
          
              </div>
            </div>
          </div>
        </div>
      
    </Container>

  
  );
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;