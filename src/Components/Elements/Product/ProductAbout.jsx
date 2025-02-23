import React from "react";
import { useParams } from "react-router-dom";
import products from "../Product/productData";
import ProductOverview from "./ProductOverview";
import CustomerReviews from "./Review/CustomerReviews";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold">Product Not Found</h2>;
  }

  return (
    <div>
      <ProductOverview product={product} />
      <CustomerReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetails;
