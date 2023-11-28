import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        if (newText.length === 0) {
            props.showAlert("Please Type Something", "warning");
        }
        else {
            props.showAlert("Converted to Uppercase", "success");
        }
    }
    const handleLowClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        if (newText.length === 0) {
            props.showAlert("Please Type Something", "warning");
        }
        else {
            props.showAlert("Converted to Lowercase", "success");
        }
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (newText.length === 1) {
            props.showAlert("There is no extra space", "warning");
        }
        else {
            props.showAlert("Extra Space Removed", "success");
        }
    }
    const handleClearClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Reset Successfully", "success");
    }
    const handleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // setText("New Text");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Reset</button>
            </div>
            <div className="container mt-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <pre>{text.length > 0 ? text : "Enter something to the preview it here"}</pre>
            </div>
        </>
    )
}
