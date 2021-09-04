import React from 'react';

const Navbar = () => {
  return (
    <div id="nav-container">
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-left-logo" href='https://www.self.inc/'>
            <img src='https://www.self.inc/static/Self_Logo_Header.svg' alt="" />
          </a>
          <div className="nav-left-links-container">
            <button className="nav-link link-highlight">Learn</button>
            <button className="nav-link link-highlight">About</button>
            <button className="nav-link link-highlight">Resources</button>
            <button className="nav-link link-highlight">Get $20</button>
            <button className="nav-link link-highlight">Help</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-link link-highlight">Log in</button>
          <div className="sign-up-btn">
            <a className="nav-link" href='https://www.self.inc/#quick-signup'>Start building today</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;