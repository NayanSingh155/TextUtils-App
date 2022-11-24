// import React from 'react'
import React, { useState } from 'react';
export default function TextForm(props) {


    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleUpClick=()=>{
        console.log("Uppercase was clicked :" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const [text,setText] = useState("Enter your text here");
    return (
        <div>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Covert to UpperCase</button>
        </div>
    )
}
