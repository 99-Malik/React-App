import React from 'react'

function Alert(props) {

    // const capitalize=(word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    props.Alert1 && <div className={`alert alert-${props.Alert1.type} alert-dismissible fade show`} role="alert">
  <strong>{(props.Alert1.type)}</strong> {props.Alert1.message} 
  
</div>
  )
}

export default Alert
