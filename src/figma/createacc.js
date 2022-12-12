import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './createacc.css';

class createaccount extends Component {
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
  <div class="mail"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>Email / Phone Number :<font color="1982A4"></font></b></font></font></font></div>
  <div class="name"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>Name :<font color="1982A4"></font></b></font></font></font></div>
  <div class="user">
  <center><input type="text" placeholder="eg:abc@gmail.com" name="username" required /></center></div>
  <div class="word"><font face="Bree Serif"><font size="5"><font color="#082F54"><b>Password : <font color="1982A4"></font></b></font></font></font></div>
  <div class="pass">
  <center><input type="password" placeholder="type your password" name="password" required /></center></div>
  <div class="bottom"><font color="#082F54"><font face="kadwa"><font size="5"><b>Re-enter password:</b></font></font></font><br></br></div>
  <div class="container">
  <center><input type="text" placeholder="xxxxxxxxxxxxx" name="password" required /></center></div>
  <br></br><br></br><br></br>
  <div class="container1">
  <center><input type="password" placeholder="type your password" name="password" required /></center></div>
  <div class="container2">
  <center><input type="text"  required /></center></div>
  <font color="#082F54"><font face="kadwa"><font size="5"><div class="pass1"><b>Address : </b></div></font></font></font><br></br><br></br><br></br><br></br><br></br>
  <div class="account"><font face="Bree Serif"><font size="6"><font color="#082F54"><b>Create Account<font color="black"></font></b></font></font></font></div>
  <div class="container3"><font face="Bree Serif"><font size="5"><font color="#082F54">Create your RT account</font></font></font></div>
  </form>
  </center>
  </div>
  );
}
}

export default createaccount;