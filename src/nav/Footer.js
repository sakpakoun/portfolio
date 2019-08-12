import React from 'react';
import back from './backToTop.svg';

class Footer extends React.Component {
  render() {
    return (
      
       <div className="footer">
       <img onClick={this.scrollToTop} className="footerIcon"  src={back} alt="backToTop"/>
        <p>Back to Top</p>
      </div>

    );
  }
}

export default Footer;