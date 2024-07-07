import React, { useState } from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    image:
      "https://d318e0jv36oqd2.cloudfront.net/media/product_medicine/Masafi-Mango-juice-1ltr-Photoroom.png-Photoroom.webp",
    title: "The Army Painter Warpaints Wizard's Orb",
    price: "$3.50",
  },
  {
    id: 2,
    image:
      "https://d318e0jv36oqd2.cloudfront.net/media/product_medicine/a6fcf5b67b03720a1d01abbc96e51731-Photoroom.png-Photoroom.webp",
    title: "The Army Painter Warpaints Voidshield Blue",
    price: "$3.50",
  },
  {
    id: 3,
    image:
      "https://d318e0jv36oqd2.cloudfront.net/media/product_medicine/4094.jpg",
    title: "The Army Painter Warpaints Crusted Sore",
    price: "$3.50",
  },
];

const ProductList = () => {
  const [counter, setCounter] = useState(0);

  const addToCart = async (event) => {
    const dot = createCartDot();
    const parent = event.target.closest("button");

    parent.append(dot);

    const moveTransition = document.startViewTransition(() =>
      moveDotToTarget(dot)
    );

    await moveTransition.finished;

    dot.remove();
    dot.style.viewTransitionName = "none";

    const counterElement = document.getElementById("js-shopping-bag-counter");
    counterElement.style.viewTransitionName = "cart-counter";

    if (!document.startViewTransition) {
      incrementCounter();
      return;
    }

    const counterTransition = document.startViewTransition(() =>
      incrementCounter(counterElement)
    );
    await counterTransition.finished;
    counterElement.style.viewTransitionName = "none";
  };

  const moveDotToTarget = (dot) => {
    const target = document.getElementById("js-shopping-bag-target");
    target.append(dot);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const createCartDot = () => {
    const dot = document.createElement("div");
    dot.classList.add("product__dot");
    dot.style.viewTransitionName = "cart-dot";
    return dot;
  };

  return (
    <ul className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
};

export default ProductList;
