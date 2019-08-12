import React from 'react';
import github from './github.png';
import linkedin from './linkedin.png';

class Contact extends React.Component {
  render() {
  return(
     <div>
    <br/>
    <br/>
    <br/>
 <div className="transbox">
   <a href="https://github.com/sakpakoun"> <img className="contactIcon" src={github} alt="github"/></a>&nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/stephanie-akpakoun/"><img className="contactIcon"  src={linkedin}alt="linkedin"/></a>
    <br/><br/>
  </div>
  <br/><br/><br/><br/>
  </div>
  );
  }
}

export default Contact;
