import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailItems from "./DetailItems";
import {Button} from "react-bootstrap"

export default function DisplayListItems(props) {
  const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    const hapus = (index) => {
      dispatch({ type: "DEL_PRODUCT", payload: index });
    };
  // console.log(products,'<<<<<<<<<<<<');
  return (
    <>
      {products.map((item, index) => {
        console.log(item);
        return (
          <div>
            <DetailItems
              barang={item.barang}
              quantity={item.quantity}
              price={item.price}
            />
            <Button onClick={() => hapus(index)}>Hapus</Button>
          </div>
        );
      })}
    </>
  );
}
