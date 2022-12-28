import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Count } from "./redux/Component/Count";
import { Header } from "./State uplifting/Header";
import { Signin } from "./State uplifting/Signin";
import { Welcome } from "./State uplifting/Welcome";
import "./App.css";
import { useSelector } from "react-redux";

function PrivateRoute({ isLoggedin, children }) {
  if (isLoggedin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
function PublicRoute({ isLoggedin, children }) {
  if (!isLoggedin) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
}

function App() {
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const count = useSelector((state) => state.count);

  return (
    <>
      <div className="App">
        <h4>Total Quantity: {count}</h4>

        <Count />
      </div>

      {/* <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isLoggedin={isLoggedin}>
              <Signin
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                setIsLoggedin={setIsLoggedin}
                isLoggedin={isLoggedin}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          isLoggedin={isLoggedin}
          element={
            <PrivateRoute isLoggedin={isLoggedin}>
              <Welcome setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
            </PrivateRoute>
          }
        />
      </Routes> */}
    </>
  );
}

export default App;
