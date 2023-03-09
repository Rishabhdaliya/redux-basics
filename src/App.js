import { useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { Count } from "./redux/Component/Count";
import { Signin } from "./State uplifting/Signin";
import { Welcome } from "./State uplifting/Welcome";
import "./App.css";
import { useSelector } from "react-redux";
import { Events } from "./Events/Events";
import { Controlled } from "./Events/Controlled and uncontrolled/Controlled";
// import { Todolist } from "./Component life cycle/Todolist";
import Headers from "./Routing/Headers";
import { Home } from "./Routing/Home";
import { About } from "./Routing/About";
import { Product } from "./Routing/Product";
import { Services } from "./Routing/Services";
import { Contact } from "./Routing/Contact";
import { ProductDetail } from "./Routing/ProductDe/ProductDetail";

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
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLoggedin, setIsLoggedin] = useState(false);
  // const count = useSelector((state) => state.count);

  return (
    <>
      <div className="App">
        {/* Events */}
        {/* <Events /> */}
        {/* <Controlled /> */}
        {/* <Todolist /> */}
        {/* Redux */}
        {/* <h4>Total Quantity: {count}</h4>
        <Count /> */}
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<h4>404 Error Occured</h4>} />
          <Route path="/products/:title/:_id/buy" element={<ProductDetail />} />
        </Routes>
      </div>
      {/*    
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
      </Routes>{" "} */}
    </>
  );
}

export default App;
