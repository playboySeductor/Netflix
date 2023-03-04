import React from "react";
import styled from "styled-components";
 import backgroundimage from "../components/backgroundimage";
 import header from "../components/header";

export default function Signup() {
  return (
    <Container>
<backgroundimage/>
<header/>
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
          <input type="email" name="email" id="" placeholder="Email Address" />
          <input type="password" name="password" id="" placeholder="Password" />
          <button>Get Started</button>
        </div>
        <button>LogIn</button>
      </div>
    </Container>
  );
}
const Container = styled.div``;
