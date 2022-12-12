import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './review.css';

class Review extends Component {
render() {
  const myStyle={
    height:'110vh',
    marginTop:'-30px',
    fontSize:'5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
  <div style={myStyle}>
  <center>
  <form>
  <hr></hr><br></br><br></br>
  <div class="mail"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>Customer name :<font color="1982A4"></font></b></font></font></font></div>
  <div class="product"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>your product : <font color="1982A4"></font></b></font></font></font></div>
  <div class="user">
  <center><input type="text" placeholder="eg:abc@gmail.com" name="username" required /></center></div>
  <div class="word"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>Product Review <font color="1982A4"></font></b></font></font></font></div>
  <div class="pass">
  <center><input type="password" placeholder="type your password" name="password" required /></center></div>
  <div class="review">
    <center><input type="text" name="review" /></center>
  </div>
  <br></br><br></br><br></br>
  </form>
  </center>
  </div>
  );
}
}

export default Review;