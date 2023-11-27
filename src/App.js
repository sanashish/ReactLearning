import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setToggleText("Enable Light Mode");
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtility" about="About Us" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
      <div className="container my-3">
        <TextForm heading="Enter your text to Analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
