import React from "react";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={product.media.source} alt={product.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{product.name}</p>
          <p className="subtitle is-6">{product.price.formatted_with_code}</p>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      <div className="card-footer is-justify-content-flex-end">
        <button class="button">
          <AddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
