import React, { useState, Suspense, lazy } from "react";
import { Alert } from "react-bootstrap";
import { ColumnOrder } from "./ColumnOrder";
import Pagination from "./Pagination";
import { RowSelection } from "./RowSelection";
import { StickyTable } from "./StickyTable";
import Loader from './Loader'

// import { SortingTable } from "./SortingTable";
// import Home from "./Home";


 const Tag = lazy(() => import("./Tag"), 5000);


const calendar = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    Math.floor(Math.random() * 10) >= 4
      ? import("./Tag")
      : Promise.reject(new Error())
  );
});

const Demo = lazy(() => import("./Tag"), 5000);


function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    // let pass = localStorage.getItem("Password") || pass
    // let mail = localStorage.getItem("Email") || mail

    if (!emaillog || !passwordlog) {
      setFlag(true);
      // console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!Pagination);
      setFlag(true);
    }
  }
        
  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <br />

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        // <RowSelection />
        // <Pagination />
        // <ColumnOrder />
        // <StickyTable />
                             
       <Suspense fallback={<Loader /> }>
       <Tag data= {<Pagination />} />
        </Suspense> 
                                   
      )}
    </div>
  );
}

export default React.memo(Login);
