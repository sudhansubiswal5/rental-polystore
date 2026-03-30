import React, { useEffect } from "react";
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {
  useEffect(() => {
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  },[]

  )
  return (
    <div>
      <LoginSignup />
    </div>
  );
}

export default App;