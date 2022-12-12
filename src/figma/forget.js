import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './forget.css';

class Forget extends Component {
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
  <div class="mail"><font face="Bree Serif"><font size="6"><font color="#FFFFFF"><b>Email ID/Phone Number : <font color="1982A4"></font></b></font></font></font></div>
  <div class="user">
  <center><input type="text" placeholder="abc@gmail.com / 9842XXXXXX" name="username" required /></center><br></br><br></br><br></br><br></br></div>
  <div class="word"><font face="Bree Serif"><font size="6"><font color="#FFFFFF"><b>New Password : <font color="1982A4"></font></b></font></font></font></div>
  <div class="top"><font face="Bree Serif"><font size="6"><font color="#FFFFFF"><b> Confirm Password : <font color="1982A4"></font></b></font></font></font></div>
  <div class="bottom"><font face="Bree Serif"><font size="6.2"><font color="#1A2F64"><b> FORGET PASSWORD<font color="1982A4"></font></b></font></font></font></div>
  <div class="submit"><font face="Bree Serif"><font size="4"><font color="#000000;"><b>Submit<font color="1982A4"></font></b></font></font></font></div>
  <div class="pass">
  <center><input type="password" placeholder="At least 6 characters" name="password" required /></center></div>
  <div class="pass1">
  <center><input type="password" placeholder="Confirm password" name="cpassword" required /></center></div>
  </form>
  </center>
  </div>
  );
}
}

export default Forget;