import React from "react";
import { CardDeck, Container, Card } from "react-bootstrap";

export default function DetailItems({ barang, quantity, price }) {
  let total = price * quantity;
  return (
    <div>
      
          <Card border="primary" style={{ width: "18rem", margin:"10px" }}>
            <Card.Body>
              <Card.Title>{barang}</Card.Title>
              <Card.Text>
                <p>Jumlah Barang : {quantity}</p>
                <p>Harga : Rp. {price}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p>Total Harga : Rp. {total}</p>
            </Card.Footer>
          </Card>
        
      {/* <p>Nama Barang : {barang}</p>
      <p>Jumlah Barang : {quantity}</p>
      <p>Harga : Rp. {price}</p>
      <p>Total Harga : Rp. {total}</p> */}
    </div>
  );
}
