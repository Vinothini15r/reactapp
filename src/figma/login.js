import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './login.css';

class Login extends Component {
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
  <img class="logo" src="adminlogo.jpg"></img>
  <hr></hr><br></br><br></br>
  <div class="mail"><font face="Bree Serif"><font size="6.2"><font color="#082F54"><b>Email ID<font color="1982A4"></font></b></font></font></font></div>
  <div class="user">
  <center><input type="text" placeholder="eg:abc@gmail.com" name="username" required /></center><br></br><br></br><br></br><br></br></div>
  <div class="word"><font face="Bree Serif"><font size="6.2"><font color="#082F54"><b>Password<font color="1982A4"></font></b></font></font></font></div>
  <div class="pass">
  <center><input type="password" placeholder="type your password" name="password" required /></center></div>
  <font color="#082F54"><font face="kadwa"><font size="3"><div class="bottom"><b>Forget password?</b></div></font></font></font><br></br><br></br><br></br><br></br><br></br>
  <br></br><br></br><br></br>
  <font face="kadwa">LOG IN</font><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <div class="account"><font face="Bree Serif"><font size="6.2"><font color="#082F54"><b>create account<font color="black"><div class="login">Login</div></font></b></font></font></font></div>
  </form>
  </center>
  </div>
  );
}
}

export default Login;