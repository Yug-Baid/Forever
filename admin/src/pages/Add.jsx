import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const Add = ({token}) => {
  const [images, setImages] = useState([null, null, null, null]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach((img, index) => {
        if (img) {
          formData.append(`image${index + 1}`, img);
        }

      });
      console.log(token)
      const response = await axios.post('http://localhost:4000'+'/api/product/add',formData,{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setPrice('')
        setImages([null,null,null,null])

      }else{
        toast.error(response.data.message)
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 p-5 rounded-xl"
    >
      {/* Upload Section */}
      <div>
        <p className="mb-2 font-medium">Upload Image</p>
        <div className="flex gap-2">
          {images.map((image, num) => (
            <label key={num} htmlFor={`image${num}`}>
              <img
                className="w-20 border rounded-lg cursor-pointer hover:opacity-80"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload"
              />
              <input
                onChange={(e) => handleImageChange(e, num)}
                type="file"
                id={`image${num}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2 font-medium">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md"
          type="text"
          placeholder="Type here"
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2 font-medium">Product description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md"
          placeholder="Write content here"
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div>
          <p className="mb-2 font-medium">Product category</p>
          <select
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2 font-medium">Sub category</p>
          <select
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 border rounded-md"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* Product Sizes */}
      <div>
        <p className="mb-2 font-medium">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              key={size}
              className={`${
                sizes.includes(size) ? "bg-orange-200" : "bg-gray-300 "
              } px-3 py-1 border  border-none cursor-pointer`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex items-center gap-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-black text-white px-10 py-3 hover:opacity-80">
        ADD
      </button>
    </form>
  );
};

export default Add;
