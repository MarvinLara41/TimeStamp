import React from 'react';
import Login from '../../components/Form/index'
import office from "../../components/Form/office.jpg"
import "./index.css"


function SignIn () {
   
        return ( 

<>
             

        
            <div className="container">

            <div className ="row"> 
            <div className="img1">
           <img className="picture" src ={office} width="700" height="600" alt="Office_Picture"/>
           </div> 
           <div className="log">
               <Login />
           </div>
            </div>
           </div>



           <div/>

</>
         );
    }

 
export default SignIn ;