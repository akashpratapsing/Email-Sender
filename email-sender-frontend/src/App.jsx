import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import EmailSender from "./components/EmailSender";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmailSender />
      <Toaster />
    </>
  );
}

export default App;
