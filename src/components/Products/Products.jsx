import React from "react";
import Product from "../Product/Product";

const testProducts = [
  {
    id: 1,
    name: "prodOne",
    description: "Some product one",
    price: "5DZD",
    image:
      "https://export-download.canva.com/pJ-Gg/DAEhZhpJ-Gg/53/0/0001-5425094404.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20210805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210805T095225Z&X-Amz-Expires=29000&X-Amz-Signature=69af7337f91a363df40f68f731b6c211d27c95c5f127ff4ec4c47a0603076f76&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Servo%2520Driver%2520PCA9685.png&response-expires=Thu%2C%2005%20Aug%202021%2017%3A55%3A45%20GMT",
  },
  {
    id: 2,
    name: "prodTwo",
    description: "Some product two",
    price: "15DZD",
    image:
      "https://export-download.canva.com/pJ-Gg/DAEhZhpJ-Gg/53/0/0001-5425094404.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20210805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210805T095225Z&X-Amz-Expires=29000&X-Amz-Signature=69af7337f91a363df40f68f731b6c211d27c95c5f127ff4ec4c47a0603076f76&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Servo%2520Driver%2520PCA9685.png&response-expires=Thu%2C%2005%20Aug%202021%2017%3A55%3A45%20GMT",
  },
  {
    id: 3,
    name: "prodThree",
    description: "Some product three",
    price: "25DZD",
    image:
      "https://export-download.canva.com/pJ-Gg/DAEhZhpJ-Gg/53/0/0001-5425094404.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20210805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210805T095225Z&X-Amz-Expires=29000&X-Amz-Signature=69af7337f91a363df40f68f731b6c211d27c95c5f127ff4ec4c47a0603076f76&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Servo%2520Driver%2520PCA9685.png&response-expires=Thu%2C%2005%20Aug%202021%2017%3A55%3A45%20GMT",
  },
  {
    id: 4,
    name: "prodFour",
    description: "Some product four",
    price: "35DZD",
    image:
      "https://export-download.canva.com/pJ-Gg/DAEhZhpJ-Gg/53/0/0001-5425094404.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20210805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210805T095225Z&X-Amz-Expires=29000&X-Amz-Signature=69af7337f91a363df40f68f731b6c211d27c95c5f127ff4ec4c47a0603076f76&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Servo%2520Driver%2520PCA9685.png&response-expires=Thu%2C%2005%20Aug%202021%2017%3A55%3A45%20GMT",
  },
];

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
