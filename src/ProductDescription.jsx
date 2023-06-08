import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
// import "./productCard.scss";
import "./productCard.scss";
import { CartContext } from "./App";
const ProductDescription = () => {
  const [data, setData] = useState({
    rating: { rate: 0, count: 0 },
  });
  const { cart, setCart } = useContext(CartContext);
  const handleCart = (item) => {
    const cartItems = [...cart];
    cartItems.push(item);
    setCart(cartItems);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        // console.log("i m here");
        setData({ ...response.data });
      })
      .catch((error) => {
        console.log("error in fething description ", error);
      });
    document.querySelectorAll(".button").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
          button.classList.add("loading");
          setTimeout(() => button.classList.remove("loading"), 3700);
        }
        e.preventDefault();
      })
    );
  }, []);

  return (
    <>
      <Container>
        <div className="row">
          {/* <h1>hello form description {id}</h1> */}
          {/* <div className="row"></div> */}
          <div className="col-md">
            <img
              src={data.image}
              alt="product image"
              height="80%"
              width="80%"
            />
          </div>
          <div className="col">
            <h2>{data.title}</h2>
            <h4>{data.category}</h4>
            <Rating name="read-only" value={data.rating.rate} readOnly />
            <h2>&#8377;{(80 * data.price).toFixed(2)}</h2>
            <p>
              <span className="text-danger">
                &#8377;<s> {`${90 * data.price}`}</s>
                {(
                  ((90 * data.price - 80 * data.price) / (90 * data.price)) *
                  100
                ).toFixed(1)}
                %off
              </span>
            </p>
            <p>{data.description}</p>
            <div className="row">
              <div className="col">
                <button className="button" onClick={() => handleCart(data)}>
                  <span onClick={() => handleCart(data)}>Add to cart</span>
                  <div className="cart">
                    <svg viewBox="0 0 36 26">
                      <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                      <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                    </svg>
                  </div>
                </button>{" "}
              </div>
              <div className="col">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    handleCart(data);
                    navigate("/cart");
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="col"></div>{" "} */}
        </div>
      </Container>
    </>
  );
};
export default ProductDescription;
