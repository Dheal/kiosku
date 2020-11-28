import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userStatus = useSelector((state) => state.user.isLogin);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nama = (event) => {
    setName(event.target.value);
  };

  const pwd = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // console.log(name)
    // console.log(password)
    // event.preventDefault();
    // props.addUser(name, password);
    // setName("");
    // setPassword("");

    axios({
      method: "post",
      url: "http://creative-crimson.eddypermana.com/kasir-app/login",
      data: {
        username: name,
        password: password,
      },
    })
      .then(function (respose) {
        // console.log(respose);
        swal("Login Sukses!", "Selamat Berbelanja!", "success");
        localStorage.setItem("userStatus", true);
        dispatch({
          type: "CHANGE_USER_LOGIN_STATUS",
          payload: {
            loginStatus: true,
          },
        });
      })
      .catch(function (error) {
        // console.log(error)
        swal("Login Gagal!", "Username/Password Salah!", "error");
        setName("");
        setPassword("");
      });
  };

  //check login status
  useEffect(() => {
    if (userStatus) {
      history.push("/");
    }
  }, [userStatus]);

  return (
    <div>
      <Container style={{ paddingTop: "10%" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Form Login</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>User Name</Form.Label> */}
                <Form.Control
                  type="text"
                  onChange={nama}
                  value={name}
                  placeholder="User Name"
                ></Form.Control>{" "}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  onChange={pwd}
                  value={password}
                  placeholder="Password"
                ></Form.Control>{" "}
              </Form.Group>
              <Button onClick={handleLogin}>Login</Button>
            </Form>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
