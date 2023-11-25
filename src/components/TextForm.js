import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox")
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleClearClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    // setText("New Text")
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Reset</button>
        </div>
        <div className="container mt-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <pre>{text}</pre>
        </div>
        </>
    )
}
