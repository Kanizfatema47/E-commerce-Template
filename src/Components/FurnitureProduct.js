import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FurnitureProduct = ({ cate }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  console.log(cate);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/officeproducts?category=${cate}`
        );
        setProducts(response.data);
      } catch (err) {}
    };
    getProduct();
  }, [cate]);

  // useEffect(() => {
  //   const filterproducts = products.filter((item) => item.category === cate);

  //   setFilteredProduct(filterproducts);
  //   console.log(filterproducts);
  // }, [products]);

  console.log(products);

  return (
    <div className="flex justify-center">
      {products.map((data) => (
        <div
          class="card w-96 bg-base-100 shadow-xl mx-3 cursor-pointer"
          key={data._id}
        >
          <figure>
            <img src={data.image} alt="furniture" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              <Link to={`/fsingleproduct/${data._id}`}>{data.name}</Link>
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{data.description.slice(0, 65)}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Office</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureProduct;
