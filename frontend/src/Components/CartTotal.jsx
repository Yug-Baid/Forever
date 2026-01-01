import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full py-5"> 
        <div className="py-5">
                 <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        
     
      <div className="flex justify-between border-b border-gray-400 py-2">
        <p>Subtotal</p>
        <p>
          {currency} {getCartAmount()}.00
        </p>
      </div>
      <div className="flex justify-between border-b  border-gray-400 py-2">
        <p>Shipping Fee</p>
        <p>
          {currency} {delivery_fee}.00
        </p>
      </div>
      <div className="flex justify-between py-2">
        <b>Total</b>
        <b>
          {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
        </b>
      </div>
    </div>
  );
};

export default CartTotal;
