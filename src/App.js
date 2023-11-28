import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setToggleText("Enable Light Mode");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtility" about="About Us" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to Analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
