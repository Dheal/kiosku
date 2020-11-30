// import logo from './logo.svg';
// import './App.css';
import Home from "./page/Home";
import Login from "./page/Login";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrivateRoute from "./routes/privateRoute";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  //check localstorage
  useEffect(() => {
    const userName = localStorage.getItem("userStatus");

    //ngecek validitas localstorage, disimpan dalam bentuk token

    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: userName,
      },
    });
  }, []);

  return (
    <div>
      <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
