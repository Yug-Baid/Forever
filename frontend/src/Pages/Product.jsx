import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart  } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize] = useState('')

  const fetch_product_data = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetch_product_data();
  }, [products, productId]);

  return productData ? (
    <>
    <div className="flex flex-col sm:flex-row gap-3 justify-center my-5 transition-all ease-in duration-500">
      <div className="flex flex-col w-30 gap-3">
        {productData.image.map((item, idx) => (
          <img onClick={() => setImage(item)} src={item} key={idx} alt="" />
        ))}
      </div>
      <div>
        <img className="w-128" src={image} />
      </div>
      <div className="flex flex-col ml-10 gap-5" style={{flexBasis:"35%"}}>
        <h2 className="text-2xl font-bold">{productData.name}</h2>
        <div className="flex flex-row gap-1 items-center w-3 -mt-3">
        <img src={assets.star_icon} />
        <img src={assets.star_icon} />
        <img src={assets.star_icon} />
        <img src={assets.star_icon} />
        <img src={assets.star_dull_icon} />
         <p className="font-bold ml-2">(122)</p>
         </div>
         <p className="text-3xl font-bold">{currency}{productData.price}</p>
        <p className="w-4/5 text-gray-400 my-2">{productData.description}</p>
               <p>Select Size</p>
        <div className="flex flex-row gap-3 ">
   
        {
          productData.sizes.map((item,idx)=>(
            <p onClick={()=>setSize(item)} className={`border py-2 px-3 ${size === item ? 'border-orange-500' : 'bg-gray-100'}`} key={idx}>{item}</p>
          ))
        }
        </div>  
        <div>
          <button onClick={() => addToCart(productData._id,size) } className="bg-black text-white px-6 py-3 mt-3 font-bold" >ADD TO CART</button>
          <hr className="mt-8 mb-5 " />
          <p className="text-[16px] text-gray-500">100% Original product.</p>
          <p className="text-[16px] text-gray-500">Cash on delivery is available on this product.</p>
          <p className="text-[16px] text-gray-500">Easy return and exchange policy within 7 days</p>
        </div>
       
      </div>
    
    </div>
        <div className="my-20 mx-40">
         <div className="flex">
           <b className="border p-3 border-gray-400">Description</b>
          <p className="border p-3 border-gray-400">Reviews (122)</p>
         </div>
         <div className="flex flex-col gap-3 border p-5 border-gray-400">
          <p className="text-gray-500">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p className="text-gray-500">E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
         </div>
         <RelatedProduct category={productData.category} subcategory={productData.subcategory}/>
        </div>  
        </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
