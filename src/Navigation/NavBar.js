import React from "react";
import './Nav.css'
const Navbar = () => {
  return (
  //   <div class="header">
  //   <a href="#default" class="logo">Path Finding Visualizer</a>
  //   <div class="header-right">
  //     <a class="active" href="#home">Understanding Djikstra</a>
  //     {/* <a href="#contact">Contact</a>
  //     <a href="#about">About</a> */}
  //     <div class="dropdown">
  //   <button class="dropbtn">Dropdown 
  //     <i class="fa fa-caret-down"></i>
  //   </button>
  //   <div class="dropdown-content">
  //     <a href="#">Link 1</a>
  //     <a href="#">Link 2</a>
  //     <a href="#">Link 3</a>
  //   </div>
  // </div> 
  //   </div>
  // </div>
  <div class="navbar">
  <div class="header">
   <a href="#default" class="logo">Path Finding Visualizer</a>
   <div class="header-right">
   <button  className='btn'>
          visualize Djikstra
          <i class="fa fa-caret-down"></i>
        </button> 
        <div class="dropdown"> 
    <button class="dropbtn">Djikstra  
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" target="_blank">Theory</a>
      <a href="">Link 2</a>
      <a href="#">Link 3</a>
      </div>
    </div>
  <a href="#home">Home</a>
  <a href="#news">News</a>
</div>
</div>
</div>
  );
};
export default Navbar;
