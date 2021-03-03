import React, { useState } from 'react';
import RSScool from '../assets/rs_school.svg'

export const Footer: React.FC = () => {
    
    return (
        <footer className="page-footer" style={{position:'fixed',bottom:0,left:0,width:'100%',}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">2048 GAME</h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/ArseniyXaoc">Github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 RS Scool Arseniy Buryachek
            <a className="grey-text text-lighten-4 right" target="_blank" href="https://rs.school/"><img src={RSScool} alt=""/>rs.school</a>
            
            </div>
          </div>
        </footer>
    );
  };