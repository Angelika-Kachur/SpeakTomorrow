import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {

  return (
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/editor">Add Article</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;