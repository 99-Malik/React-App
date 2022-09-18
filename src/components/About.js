import { useState } from "react"
import React from 'react'

export default function About() {
    const[btnText,setbtnText]=useState("Eanble Dark Mode")
    const[myStyle,setmyStyle]=useState({
        color:'White',
        backgroundColor:'Black'
    })
   const toggleStyle=()=>{
        if(myStyle.color==='White'){
            setmyStyle({
                color:'black',
                backgroundColor:'White',
               
            })
            setbtnText('Enable Dark Mode')
           
        }
        else{
            setmyStyle({
                color:'White',
                backgroundColor:'Black',
                border:'2px solid white'
            })
            setbtnText('Enable Light Mode')
        }
    }


  return (
    <>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <h1 className='usama mx-3'>  About Us</h1>
  <div className="accordion-item my-3">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
           About Us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show my-2" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
   
  </div>
 
</div>
 <button className="btn btn-primary my-1" onClick={toggleStyle}>{btnText}</button>
    </>
  )
}
