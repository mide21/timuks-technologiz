import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 991px) {
    flex-flow: column nowrap;
    background-color: #1a1a1a !important;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1901;
    padding: 75px 40px 40px !important;

    li a {
      font-weight: 300 !important;
      font-size: 16px !important;
      line-height: 2;
      color: #ffffff !important;
      text-transform: none !important;
      letter-spacing: 0px !important;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open} className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/services" className="nav-link" >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contact" className="nav-link" >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/application-form" className="nav-link" >Form</NavLink>
        </li>
      </Ul>
    </>
  )
}

export default RightNav
