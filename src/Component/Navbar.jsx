import React from 'react';
import { Link } from "react-router-dom";
import Home from '../Pages/Home';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/Home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/Contact'>Contact</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/Counter'>Counter</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/Gitsearch'>GitSearch</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to='/fetch'>Fetch</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;
