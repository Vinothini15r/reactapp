import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './guide.css';

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
  <div class="mail"><font face="inter-ialic"><font size="5"><font color="#082F54"><b> Our company will not force customers for buying these products all is accroding to customers own interest.we have a
really good products  But before you buy, check out our shopping advice for everything from cell phones and digital cameras to video cards and wireless routers.There's nothing like a fresh calendar page to make your aging tech look even older. Didn't get that iPhone 5s on your holiday wish list? Ready to finally bid farewell to that barely breathing laptop? Printer spitting out its last pages? Now's a great time to score deals on all sorts of technology products as both brick-and-mortar and online retailers slash prices to move stock and make room for next year's models.<br></br>But you shouldn't buy blindly. Here in the PC Labs, we test, rate, and review thousands of products each year, and we dispense handy shopping advice on all of them. Below you'll find links to our products, telling you exactly what you need to look for when you shop for a particular type of product. All you need to find the right technology to start the new year is right here.<br></br>Thanking you.
<font color="1982A4"></font></b></font></font></font></div></div>
<div class="guide"><font face="inter-ialic"><font size="6"><font color="#FFFFFF"><b>Buying Guidelines
<font color="#white"></font></b></font></font></font></div>
<div class="ok"><font face="inter-italic"><font size="5"><b>ok</b></font></font></div>
  </form>
  </center>
  </div>
  );
}
}

export default Guide;