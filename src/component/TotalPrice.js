import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
export default function TotalPrice({ total }) {


  const product = useSelector(state => state.product)
  // console.log(product,">>>>>>>>>>>")
  // const [totalAll, setTotalAll] = useState(0);

  // useEffect(() => {
  //   let tmp = 0;
  //   total.forEach((val) => {
  //     tmp += val.price * val.quantity;
  //   });

  //   setTotalAll(tmp);
  // }, [total]);

  return (
    <div>
      <p>Total yang harus dibayarkan : Rp. {product.totalHarga}</p>
    </div>
  );
}
