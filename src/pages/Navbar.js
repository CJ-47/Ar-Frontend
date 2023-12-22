import "./Navbar.css";
import Home from "./Home";
import Contact from "./Contact";
import Form  from "./Form";
import {  Link } from "react-router-dom";
export default function Navbar()
{
   return <div className="Navbar" style={{padding:"30px"}}>
   <div className="Left" >
      <center>
         <span style={{color:"white",fontSize:"40px" ,fontWeight:"bold"}}>Dwell < span style={{color:"Yellow"  }}>AR</span></span>
         <h2 style={{color:"orange" }}>Dream Before Making It A Reality </h2></center>
         
         
      <span style={{display:"flex",left:"80vw",backgroundColor:"#C653FF",position:"relative",width:"15vw"}}>
      
      <Link className="lnk" to="/">Home</Link>
    
      <Link className="lnk" to="/Contact">Contact</Link>
    
      <Link className="lnk" to="/Form">Form</Link>
    </span>
        
      </div> 
   </div>
}