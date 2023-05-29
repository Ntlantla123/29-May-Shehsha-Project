import React, { useEffect, useRef, useState } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import './TopNav.css';
import profilepic from './images/profilepic.png';


export const TopNav = () => {
  const navigation = [
    { name: 'Home', href: '/Home' },
    { name: 'Lessons', href: '/lessons' },
    { name: 'Recipes', href: '/Recipes' },
    { name: 'Categories', href: '/' },
  ]
  //const [loading, setloading] = useState(false);
 // const location = useLocation();

 // useEffect(() => {
    //setloading(true);
    //const timer = setTimeout(()=> {
    // setloading(false);

    //}, 2000); // Simulating a loading delay of 2 seconds
   // return () => clearTimeout(timer);
   //{loading && <div>Loading...</div>}
  //}, [location]);
  

  return (

    <nav className="TopNav">
      <img className="TopNav_logo" src={"images/shesha_logo.png"} alt="" style={{ height: "70px", top: "20px", }} />
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.href} className={({ isActive }) => { return `TopNav_a ${isActive ? 'TopNav_a active' : ''}` }}>{item.name}</NavLink>
      ))}
      
       

      <img src={profilepic} alt="profilepic.png" style={{ position: "relative", left: "27%", top: "20px", borderRadius: "50%", }}></img>
    </nav>
  )
}
