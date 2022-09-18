import React , { useState } from 'react'

export default function TextForm(props) {

    const handleUpCase=()=>{
        // console.log("Upper case was clicked")
        const newText=Text.toUpperCase();
        setText(newText)

    }
    const handloCase=()=>{
        // console.log("Upper case was clicked")
        const newText=Text.toLowerCase();
        setText(newText)

    }
    const handlclearclick=()=>{
        // console.log("Upper case was clicked")
        const newText=("");
        setText(newText)

    }
    const handOnChange=(event)=>{
        // console.log("Upper case was clicked")
        setText(event.target.value)
    }
    const [Text, setText] = useState("");
    const handlonCopy=()=>{
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
   
   
  
  return (
    <>

    <div  className={`container  text-${props.mode==='light'?'Dark':'light'}` }>
    <h1>{props.heading}</h1>
   
  <div className="mb-3 my-3">

    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className={`form-control text-${props.mode==='light'?'Dark':'light'}`}  value={Text} onChange={handOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="exampleFormControlTextarea1" rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handloCase}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handlclearclick}>Click to Clear</button>
  <button className="btn btn-primary mx-2" onClick={handlonCopy}>Click to Copy</button>
</div>
<div className={`container my-4 text-${props.mode==='light'?'Dark':'light'}`}>

<h1> Your Text Summary </h1>
<p> {Text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {Text.trim().length } characters</p>
<p>{0.008 *Text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes to Read</p>
<h2> Preview</h2>
<p>{Text.length>0?Text:"Enter Your Text To Preview it here"}</p>
  
</div>

  </>
  )
}

