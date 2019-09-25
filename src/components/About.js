import React from 'react';
import kelly from '../images/profile.jpg';

export default function About() {
    return (
        <div className='container' id='about'>
          <h1>About</h1>
          <div><img src={kelly} alt='Kelly' /></div>
          <p>
            Hi! My name is Kelly. I'm a web developer based in London, looking for opportunities in web development.
            A graduate from Queen Mary University of London, with a First Class Honours Bachelor's degree in Mathematics.
          </p>
          <p>
            I've had previous experience working at British Gas, helping to build new features on their new generation app. 
            This was my first commercial role post graduation and whilst there I learnt a lot about writing clean, readable code, 
            and the collobarative effort of maintaining such a huge codebase. 
            I also learnt to work with agile methodologies, most notably Scrum and Kanban.
          </p>
          <p>
            More recently, I've just completed the Kodiri Coding Bootcamp. I've refined and enhanced my skills by learning to build full stack, responsive apps from scratch!
            During the two months, I have built a solo app (Kodlfix) as well as a Team App (Fridge-App). 
            On top of this, I have attended and provided support for several Kodiri meetup events - 
            I recently won the Intermediate Challenge at the Silicon Roundabout event held at the Accelerator (part of Metropolitan University)! 
            Navigate to the following sections to find out more about the tech stack used and projects I've worked on.
          </p>
        </div>
    );
}