import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                index
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              />
              <Route exact path="about" element={<About />} />
              <Route
                exact
                path="login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
