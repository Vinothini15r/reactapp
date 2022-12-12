import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './details.css';

class Guide extends Component {
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
  <div class="container">
  <div class="Details"><font face="inter"><font size="5"><font color="#000000"><b> For further details :
<font color="1982A4"></font></b></font></font></font></div>
<div class="guide"><font face="inter-italic"><font size="6"><font color="#000000"><b>Contact us: </b><br></br></font></font></font></div>
<div class="number"><font face="inter-italic"><font color="#000000"><font size="10px"><b>8877040422  <br></br>/ 8877040421</b></font></font></font></div>
<font color="#000000"></font></div>
  </form>
  </center>
  </div>
  );
}
}

export default Guide;