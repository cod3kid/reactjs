import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../features/icecream/icecreamSlice";

function IcecreamView() {
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h3>No. of Icecream - {numOfIcecream}</h3>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Icecream</button>
    </div>
  );
}

export default IcecreamView;
