import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FsingleProduct = () => {
  const [cartbtn, setCartbtn] = useState("Add to Cart");
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  console.log(id);
  const [product, setProduct] = useState([]);

  //const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:7000/products/find/${id}`
        );
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  console.log(typeof product);

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap items-center shadow-lg">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 px-5">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {product.name}
              </h1>
              {/* <div class="flex mb-4">
                <a class="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                  Description
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div> */}

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Color</span>
                <span class="ml-auto text-gray-900">{product.color}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Material</span>
                <span class="ml-auto text-gray-900">{product.Material}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Quantity</span>
                <span class="ml-auto text-gray-900">4</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Price : {product.price}
                </span>
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Buy Now
                </button>
                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-[30px] font-bold">Description :</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FsingleProduct;