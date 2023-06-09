import { useState, useContext, useEffect } from "react";

import { CartContext } from "./App";

import React from "react";
import { Rating } from "@mui/material";
import "./cart.css";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  //   console.log("cart :", cart);
  //   const [cartQuant, setCartQuant] = useState({});
  //   console.log("cartq:", cartQuant);

  //     const cartQuantity = (id) => {
  //         let rcds={}
  //         if (id in cartQuant === true) {
  //             if (evt.target.name === 'plus')
  //                 rcds = { ...cartQuant, id: cartQuant.id + 1 };
  //                 else
  //                 rcds = { ...cartQuant, id: cartQuant.id - 1 };
  //           } else {
  //             setCartQuant({ ...cartQuant, id: 1 });
  //           }
  //     //   const rcds = cart.map((row, i) => row.id).reduce((acc, i) => acc, 1);
  //     //   setCartQuant({...rcds, id: })
  //   };
  //   useEffect(() => {
  //     cart.map((row, i) => {
  //       console.log("this row is :", row.id);
  //       console.log("before setcartq:", cartQuant);
  //       console.log({ ...cartQuant, [row.id]: 1 });
  //       setCartQuant({ ...cartQuant, [row.id]: 1 });
  //     });
  //   }, [cart]);
  const handleDel = (id) => {
    const rcds = cart.filter((item) => item.id != id);
    setCart(rcds);
  };
  const totalcost = cart
    .map((row, i) => row.price)
    .reduce((acc, i) => acc + i, 0);
  //   console.log("totalcost", totalcost);
  const totalcostVat = (18 * totalcost * 0.01 + totalcost).toFixed(2);
  //   const handleQuant = (evt) => {};
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {/*<!-- Single item -->*/}
                  {cart.map((row, i) => {
                    return (
                      <div className="row" key={i}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/*<!-- Image -->*/}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={row.image}
                              className="w-100"
                              alt={row.title}
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                          {/*<!-- Image -->*/}
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/*<!-- Data -->*/}
                          <p>
                            <strong>{row.title}</strong>
                          </p>
                          <p>
                            <Rating
                              name="read-only"
                              value={row.rating.rate}
                              readOnly
                            />
                          </p>
                          <p>Size: M</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => {
                              handleDel(row.id);
                            }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                          {/*<!-- Data -->*/}
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/*<!-- Quantity -->*/}
                          <div
                            className="d-flex mb-4"
                            style={{
                              maxWidth: "300px",
                            }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              name="minus"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={1}
                                type="number"
                                className="form-control"
                                readOnly
                              />
                              <label className="form-label" htmlFor="form1">
                                Quantity
                              </label>
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              name="plus"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          {/*<!-- Quantity -->*/}

                          {/*<!-- Price -->*/}
                          <p className="text-start text-md-center">
                            <strong>&#8377;{80 * row.price}</strong>
                          </p>
                          {/*<!-- Price -->*/}
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                  {/*<!-- Single item -->*/}

                  {/*<!-- Single item -->*/}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">Within 7 working Days </p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>&#8377;{(80 * totalcost).toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including GST)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>&#8377;{80 * totalcostVat}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => {
                      alert("checkout done");
                    }}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
