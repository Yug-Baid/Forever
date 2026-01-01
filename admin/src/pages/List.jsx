import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// Currency formatter (example: $10)
const currency = (num) => `$${num}`;

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch product list
  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Remove product
  const removePrd = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // refresh list after delete
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-6">
      <p className="mb-2 text-lg font-semibold">All Products List</p>

      {/* Table Header */}
      <div className="hidden md:grid mb-5 grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border  font-bold bg-gray-200 rounded-[5px]">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* Product List */}
      {list.length > 0 ? (
        list.map((item, index) => (
          <div
            key={item._id || index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border mb-3  hover:bg-gray-50"
          >
            {/* Product Image */}
            <img
              className="w-12 h-12 rounded object-cover rounded-[3px]"
              src={item.image[0]}
              alt={item.name}
            />

            {/* Product Name */}
            <p>{item.name}</p>

            {/* Product Category */}
            <p>{item.category}</p>

            {/* Product Price */}
            <p>{currency(item.price)}</p>

            {/* Delete Action */}
            <p
              className="text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700"
              onClick={() => removePrd(item._id)}
            >
              X
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No products found.</p>
      )}
    </div>
  );
};

export default List;
