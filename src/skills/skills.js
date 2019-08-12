import React from 'react';

class Skills extends React.Component {
  render() {
    return (
<div>

<br/>
<br/><br/>
<div className="transbox2">

<h1 className="whiteText"> My Skills</h1>
<div className="row">
  <div className="column">
  <div className="column1"><h2 className="whiteText">Design</h2></div>
  <p>Design is not only about creating a 
  beautiful presentation but also about giving the user a functional, usable and responsive 
   experience. I have worked on revamping old sites and creating new user journeys for different applications -Financial, Security, Commercial etc...
   Being able to understand the unique requirements based on the type of user and their business processes is key to the greatest User Experiences.
</p></div>
  <div className="column">
  <div className="row">
  <div className="column2"><h2 className="whiteText">Development</h2></div></div>
  <p>Development is about solving problems by creating robust software. The best software is the kind that is 
  taken for granted because it always runs so smoothly.
  Whether working for a forune 200 company or working on personal projects, I always strive to create such applications. 
  This is accomplished through rigorous software engineering rules,
  testing and the firm belief that code can always be optimized.
   </p></div>
  <div className="column">
  <div className="column3"><h2 className="whiteText">Support</h2></div>
  <p>Having worked on new development as well as production support for various applications at
   a fortune 200 company, I have had the opportunity to learn about a wide array
   of technologies and tools. Whether it be monolithic back ends, distributed systems, 
   or external APIs, I have a wealth of knowledge and a tremendous ability 
   to troubleshoot issues. This allows me to be very quick at becoming proficient in new technologies 
   and a resource for multiple systems.</p></div>
</div>
</div>
<br/><br/>
</div>
    );
  }
}

export default Skills;