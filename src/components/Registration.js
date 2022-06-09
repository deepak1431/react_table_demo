import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from './Login'

function Registration() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [profession, setProfession] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Phone", JSON.stringify(phone));
      localStorage.setItem("profession", JSON.stringify(profession));

      // console.log("Saved in Local Storage");

      // setLogin(!login);
    }
  }

  function handleClick(e) {
    setLogin(!login);
  }

  return (
    <>
      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone No.:</label>
              <input
                type="Phone"
                className="form-control"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Choose your Profession:</label>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)} >
                <option>Select</option>
                <option>React Developer</option>
                <option>Web Designer</option>
                <option>Nodejs Developer</option>
                <option>Jr.FullStack</option>
              </Form.Control>
            </div>
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <button
              onClick={handleClick}
              className="btn btn-primary btn-lg btn-block"
            >
              Already registered log in?
            </button>
            {flag && (
              <Alert color="primary" variant="danger">
                every field is required!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;
