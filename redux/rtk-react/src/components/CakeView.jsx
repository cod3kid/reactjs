import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../features/cake/cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No. of Cakes: {numOfCakes}</h3>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <button onClick={() => dispatch(restocked(10))}>Restock Cakes</button>
    </div>
  );
}

export default CakeView;
