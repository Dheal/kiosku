// import React, { useEffect, useState } from "react";
// import FormOrder from "../component/FormOrder";
// import DisplayListItems from "../component/DisplayListItems";
// import TotalPrice from "../component/TotalPrice"

// function OrderPage() {
//   const [orderItems, setOrderItems] = useState([]);
//     // const [totalAll, setTotalAll] = useState(0)

//   useEffect(() => {
//     // console.log(orderItems);
//     // let tmp = 0
//     // orderItems.forEach(val => {
//     //     tmp+= val.price * val.quantity
//     // })
//     // setTotalAll(tmp)
//   }, [orderItems]);


//   function handleAddItem(newOrdewerItem) {
//     setOrderItems([...orderItems, newOrdewerItem]);
//   }
//   return (
//     <>
//       <FormOrder handleAddItem1={handleAddItem} />
//       <DisplayListItems orderItems1={orderItems}/>
//       <TotalPrice total={orderItems}/>
//       {/* <p>
//           {totalAll}
//       </p> */}

//     </>
//   );
// }

// export default OrderPage;