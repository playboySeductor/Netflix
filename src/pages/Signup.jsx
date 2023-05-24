import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
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

export default function Signup() {
  const [showPassword, setShowPassword]= useState(false);
  const navigate = useNavigate();


  const [formValues,setFormValues]=useState({
    email:"",
    password:""
  });

const handleSignIn = async()=>{
  // console.log(formValues);
  try{
    const {email,password}= formValues;
    await createUserWithEmailAndPassword(firebaseAuth,email,password);
  }
  catch(err)
  {
    console.log(err);
  }
};

onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser)
  navigate("/");
})

  return (
    <Container showPassword={showPassword}>
<BackgroundImage/>
<div className="content">
<Header login />
      {/* <header1 /> */}
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited Movies, TV Shows and more</h1>
          <h4>Cancel anywhere anytime</h4>
          <h6>
            Ready to watch ? Enter your email to create or restart membership
          </h6>
        </div>
        <div className="form">
          <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formValues.email} 
          onChange={(e)=>
            setFormValues({
            ...formValues,
            [e.target.name]:e.target.value,
            })}
            
            />
          {
            showPassword &&  
            (<input 
              type="password" 
              name="password" 
              id="" 
              placeholder="Password" 
              value={formValues.password} 
          onChange={(e)=>
            setFormValues({
            ...formValues,
            [e.target.name]:e.target.value,
            })}
              />)
          }
         
          {
            !showPassword &&
            <button onClick={()=>setShowPassword(true)}>Get Started</button>
          }
            </div>
          
         
        <button onClick={handleSignIn}>Sign Up</button>
      </div>
      </div>
    </Container>

  
  );
}
const Container = styled.div`
position: relative;
.content{
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  height: 100vh;
  width:100vw;
  display:grid;
  grid-template-rows: 15vh 85vh;
  .body{
    gap: 1rem;
    .text{
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      .h1{
        padding: 0 25rem;
      }
    }
    .form{
      display:grid;
      grid-template-columns:${({showPassword})=>showPassword ?"lfr lfr":"2fr 1fr"};
      width: 60%;
      input{
        color:black;
        border:none;
        padding: 1.5rem;
        font-size:1.2rem;
        border: 1px solid black;
        &:focus{
          outline:none;
        }
      }
      button{
        padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor:pointer;
  color:white;
  border-radius: 0.2 rem;
  font-weight: bolder;
  font-size: 1.05rem;
      }
    }
    button{
      padding: 0.5rem 1rem;
background-color: #e50914;
border: none;
cursor:pointer;
color:white;
border-radius: 0.2 rem;
font-weight: bolder;
font-size: 1.05rem;
    }
  }
}
`