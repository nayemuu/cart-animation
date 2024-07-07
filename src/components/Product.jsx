import React from "react";

const Product = ({ product }) => {
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

    // const counterElement = document.getElementById("js-shopping-bag-counter");
    // counterElement.style.viewTransitionName = "cart-counter";

    // if (!document.startViewTransition) {
    //   incrementCounter();
    //   return;
    // }

    // const counterTransition = document.startViewTransition(() =>
    //   incrementCounter(counterElement)
    // );
    // await counterTransition.finished;
    // counterElement.style.viewTransitionName = "none";
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
    <li className="product">
      <img className="product__image" src={product.image} alt={product.title} />
      <div className="product__info">
        <h3 className="product__title">{product.title}</h3>
        <p className="product__price">{product.price}</p>
        <button className="product__button" onClick={addToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Product;
