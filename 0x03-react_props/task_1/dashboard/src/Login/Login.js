import './Login.css';
import React from "react";

function App() {
  return (
    <>

      <div className="Login-body">
        <p>
          Login to access the full dashboard
        </p>
        <form>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
        </form>
      </div>

    </>
  );
}

export default App;
