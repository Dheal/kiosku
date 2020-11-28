import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import { Button } from "react-bootstrap";

const FormOrder = (props) => {
  const [barang, setBarang] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const nama = (event) => {
    setBarang(event.target.value);
  };

  const jumlah = (event) => {
    setQuantity(event.target.value);
  };
  const harga = (event) => {
    setPrice(event.target.value);
  };

  const simpan = (event) => {
    event.preventDefault();
    props.addProduct(barang, quantity, price);

    // handleAddItem1({
    //     barang: barang,
    //     quantity: parseInt(quantity),
    //     price: parseInt(price)
    // });

    // console.log(item)
    // console.log(item1)
    // console.log(item2)
    setBarang("");
    setQuantity(0);
    setPrice(0);
  };

  // console.log(item);
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Nama Barang</Form.Label>
          <Form.Control
            type="text"
            onChange={nama}
            value={barang}
            placeholder="nama barang"
          ></Form.Control>{" "}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Jumlah Barang</Form.Label>
          <Form.Control
            type="number"
            onChange={jumlah}
            value={quantity}
            placeholder="quantity"
          ></Form.Control>{" "}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            onChange={harga}
            value={price}
            placeholder="harga"
          ></Form.Control>{" "}
        </Form.Group>
        <Button type="submit" onClick={simpan} variant="success">
          {" "}
          Pesan{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (barang, quantity, price) =>
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          barang: barang,
          quantity: quantity,
          price: price,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(FormOrder);
