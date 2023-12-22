import { useState } from "react"
import "./Form.css"
import Axios from 'axios';
import Navbar from "./Navbar"
export default function Form()
{

const [Form,SetForm] =useState(
   {  Name:"",
Email:"",
Loc:"",
Typ:"" }); 


const Submit = (e) => {
   console.log("submit");
   e.preventDefault();

   Axios.post('http://localhost:4000/insert', {
      Name:Form.Name,
Email:Form.Email,
Loc:Form.Loc,
Typ:Form.Typ
})
}

function Reset()
{
   console.log(Form);
   SetForm({
   Name:"",
   Email:"",
   Loc:"",
   Typ:"" });

}  


return <div className="Form">
      <Navbar/>
      
 <div className="Subm">
<center> <span style={{fontSize:"40px",fontWeight:"bolder"}} >Interested ? Write to Us </span> </center>
      <div  style={{display:"flex",margin:"30px"}}>
      <div className="inpt" style={{width:"50%",margin:"auto"}}>

<label>Client Name</label>
<input id="name" value={Form.Name} onChange={(e)=>SetForm({...Form,Name:e.target.value})}></input>
<br/><br/>
<label>E-mail Address</label>
<input id="email" value={Form.Email} onChange={(e)=>SetForm({...Form,Email:e.target.value})} ></input>
<br/><br/>
<label>Establishment Type</label>
<input id="type" value={Form.Typ} onChange={(e)=>SetForm({...Form,Typ:e.target.value})} ></input>
<br/><br/>
<label>Location</label>
<input id="loc" value={Form.Loc} onChange={(e)=>SetForm({...Form,Loc:e.target.value})}></input>
      <br/><br/>
 &emsp;&emsp;     <button onClick={Submit}>Submit</button>
      &emsp;
      <button onClick={Reset}>Reset</button>
   </div>
   <div style={{width:"40%",margin:"auto"}}>
 <img src="https://th.bing.com/th/id/OIP.HlZvllHvDm_US5AFPSLFUwHaE_?w=269&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="90%"/>
      </div> 
      </div>
   </div>
   </div>
}