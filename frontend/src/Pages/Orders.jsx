import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const { products = [], currency = "$",token } = useContext(ShopContext);

  const [orderData,setOrderData] = useState([])

  const loadOrderData = async ()=>{
    try {
      if(!token){
        return null
      }

      const response = await axios.post( 'http://localhost:4000'+'/api/order/userOrders',{},{headers:{token}})

      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
             item['paymentMethod'] = order.paymentMethod
              item['date'] = order.date
              allOrdersItem.push(item)

          })
        })
        setOrderData(allOrdersItem.reverse())
      }

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])
  // Adjust the slice range if you want a different subset


  return (
    <div className="border-t pt-10">
      {/* Heading */}
      <div className="px-5 md:px-10">
        <div className="flex items-center gap-3">
        <Title text1={'MY'} text2={'ORDERS'}/>
        </div> 
      </div>

      {/* Orders */}
      <div className="mt-6 space-y-3 px-3 md:px-10">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white/70 shadow-[0_1px_0_#00000008]"
          >
            <div className="grid grid-cols-12 items-center gap-3 md:gap-6 p-4 md:p-5">
              {/* Left: image + details */}
              <div className="col-span-12 md:col-span-9 flex items-start gap-6 text-sm">
                <img
                  className="w-16 h-16 sm:w-30 sm:h-30  rounded-lg bg-gray-100"
                  src={item.image?.[0]}
                  alt={item.name || "Product"}
                />
                <div>
                  <p className="sm:text-base font-medium text-gray-800">{item.name}</p>

                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg font-medium">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    PaymentMethod: <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Middle: status */}
              <div className="col-span-8 md:col-span-2 flex items-center md:justify-center">
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="min-w-2 h-2 rounded-full bg-green-500 inline-block" />
                  {item.status}
                </p>
              </div>

              {/* Right: action */}
              <div className="col-span-4 md:col-span-1 w-[150px]">
                <button
                  type="button" onClick={loadOrderData}
                  className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
