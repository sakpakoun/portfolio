import React from 'react';
import profilePic from './stef.jpg';

class About extends React.Component {
  
  render() {
    let benin = <a href="https://shorturl.at/chEH6">Benin in West Africa</a>;
    let codeCrush = <a href="https://codecrush.unomaha.edu/"> Code Crush </a>;
    let urbanLeague = <a href="http://www.urbanleagueneb.org/"> Urban League </a>;
    let girlScout = <a href="https://www.girlscouts.org/"> Girl Scout </a>;
  return(
    <div>
    <br/>
    <br/>
    <br/><br/>
    <br/><br/>
    <br/>
<div className="transbox">
<h1 className="title">About Me</h1>
   <img className="profilePic" src={profilePic} alt="profilePic"/><p>I am Stephanie Akpakoun. I originally come from {benin}.
    I have always had a passion for technology and electronics. 
   I am a fervent advocate of Technology education and speak and lead workshops for young girls in STEM with various involvements in {codeCrush},
   {girlScout} and the {urbanLeague}. I am also a member of the Cercle Social non profit whose goal is to provide 
   access to technology to underprivileged youth in rural parts of Benin. 
    I have 5 years of experience in various front end and back end technologies and software development methodologies. More on that in my 
    resume below. I enjoy challenges and thrive on change. I like to stay moving, so when I am not working, I spend my time traveling,
     being outdoors hiking or biking. Or in the cooler months, I like to knit, read or work on DIY projects such as an aquaponics garden or making yogurt, cheese and kombucha.</p>  
  
  
</div>
</div>
  );
  }
}

export default About;
