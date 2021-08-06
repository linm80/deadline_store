import React from "react";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <main className="section is-medium">
      <div class="container is-max-desktop">
        <div className="columns is-multiline">
          {products.map((product) => (
            <div key={product.id} className="column is-one-third">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
