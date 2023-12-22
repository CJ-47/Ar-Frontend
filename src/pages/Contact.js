import Navbar from "./Navbar";
import './Contact.css'
export default function Contact()
{
   return <div className="Contact">
      <Navbar/>
      <div className="Sub">
<span style={{marginLeft:"10vw"}}>
<span style={{width:"40%",padding:"20px",margin:"auto"}}>
   <img src="https://th.bing.com/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" height="70px"/>
</span>
<span style={{fontSize:"60px",fontWeight:"bold",marginLeft:"10vw"}}>DwellARsdev@gmail.com</span>
</span></div>
<div className="Sub">
<span style={{marginLeft:"10vw",marginTop:"20px"}}>
<span style={{width:"40%",padding:"20px"}}>
   <img src="https://th.bing.com/th?id=OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" height="70px"/>
</span>
<span style={{fontSize:"60px",fontWeight:"bold",marginLeft:"10vw",left:"2vw",position:"relative"}}>DwellARsdev</span>
</span>
      </div>
      <div className="Sub">
<span style={{marginLeft:"10vw",marginTop:"20px"}}>
<span style={{width:"40%",padding:"20px"}}>
   <img src="https://th.bing.com/th?id=OIP.Zg8Qt0Jlgjal2EM1u2mnpwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" height="70px"/>
</span>
<span style={{fontSize:"60px",fontWeight:"bold",marginLeft:"10vw",left:"2vw",position:"relative"}}>+91 7896196944</span>
</span>
      </div>
   </div> 
}