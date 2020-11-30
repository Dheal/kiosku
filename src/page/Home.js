import React,{useState} from "react";
// import OrderPage from './OrderPage';
import FormOrder from "../component/FormOrder";
import DisplayListItems from "../component/DisplayListItems";
import TotalPrice from "../component/TotalPrice";
import { Container, Row, Col, CardDeck, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from "sweetalert";


export default function Home() {
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleLogout = () => {
  //   localStorage.removeItem("userStatus");
  //   dispatch({
  //     type: "CHANGE_USER_LOGIN_STATUS",
  //     payload: {
  //       loginStatus: false,
  //     },
  //   });
  // };

  const handleLogout =()=>{
    swal({
      title: "Apa kamu yakin keluar dari halaman ini?",
      text: "Pemesanan akan hilang!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Pesanan telah hilang!", {
          icon: "success",
        });
        localStorage.removeItem("userStatus");
    dispatch({
      type: "CHANGE_USER_LOGIN_STATUS",
      payload: {
        loginStatus: false,
      },
    });
      } else {
        swal("Lanjutkan pemesanan!");
      }
    });
  }
  return (
    <>
   
      <Container>
        <h1>Form Input Barang</h1>
        <Button onClick={handleLogout} variant="danger">Logout</Button>
        <hr></hr>
        <Row>
          <Col sm={4}>
            <FormOrder />
            <hr></hr>
            <TotalPrice />
          </Col>
          <Col sm={8}>
            <Container>
              <CardDeck>
                <DisplayListItems />
              </CardDeck>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Peringatan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda yakin?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Ya
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
