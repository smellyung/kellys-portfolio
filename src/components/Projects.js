import React from 'react';
import kodflix from '../images/kodflix.png';
import fridgeApp from '../images/fridgeApp.png';

export default function Projects() {
    return (
        <div className='container' id='projects'>
          <h1>Projects</h1>
          <div className='projects'>
            <div className='project'>
              <img src={kodflix} alt='kodflix screenshot'/>
              <a href='https://kodflix-kellyung.herokuapp.com/'>
                <div className='overlay'>
                  <p>Kodflix</p>
                  <p>A Tv Series and Movie watching App</p>
                  <p>Built with:</p>
                  <p>React.js, Node.js, Express.js, MongoDB</p>
                </div>
              </a>
            </div>
            <div className='project'>
              <img src={fridgeApp} alt='fridge-app screenshot'/>
              <a href='https://frigo-app.herokuapp.com/'>
                <div className='overlay'>
                  <p>Fridge-App</p>
                  <p>
                    An app to reduce food-wastage, 
                    allowing users to input their food items and expiry dates 
                    - alerting the user when a food item is almost to expire or is expired
                  </p>
                  <p>Built with:</p>
                  <p>React.js, Node.js, Express.js, MongoDB</p>
                </div>
              </a>
            </div>

            {/* <div className='project'>
              <p>Smart Brain</p>
              <p>A face recognition app</p>
            </div>
            <div className='project'>
              <p><span>IN</span>FINITE Streetwear</p>
              <p>A sustainable streetwear brand</p>
            </div> */}
          </div>
        </div>
    );
}