import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './news.css';

class News extends Component {
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
  <div class="apple"><font face="inter-ialic"><font size="5"><font color="#082F54"><b><br></br><li>Apple May Have Shelved Plans to Launch Affordable Pencil: Report</li>
<font color="1982A4"></font></b></font></font></font></div></div>
<div class="box">
<div class="hp"><font face="inter-ialic"><font size="5"><font color="#082F54"><b><br></br><li>HP to Lay Off 6,000 Employees in Next Three Years in Cost Cutting Plan</li>
<font color="1982A4"></font></b></font></font></font></div></div>
<div class="bottom">
<div class="tablet"><font face="inter-ialic"><font size="5"><font color="#082F54"><b><br></br><li>India Tablet PC Market Sees Rising Demand for 5G Capable Devices in Q3 2022: CMR</li>
<font color="1982A4"></font></b></font></font></font></div></div>
<div class="news"><font face="inter-ialic"><font size="6"><font color="#FFFFFF"><b>NEWS
<font color="#white"></font></b></font></font></font></div>
<div class="ok"><font face="inter-italic"><font size="5"><b>ok</b></font></font></div>
  </form>
  </center>
  </div>
  );
}
}

export default News;