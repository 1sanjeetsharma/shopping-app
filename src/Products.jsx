import { Divider } from "antd";
import "./products.css";
// import "./product.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup, Container } from "react-bootstrap";
import { CartContext } from "./App";
import { useContext } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ProductCard from "./ProductCard";
const style = {
  background: "#0092ff",
  padding: "8px 0px",
};
const Products = () => {
  const [product, setProduct] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [checked, setChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    {
      name: "All",
      value: "1",
      category: "all",
    },
    {
      name: "Electronics",
      value: "2",
      category: "electronics",
    },
    { name: "Jewelery", value: "3", category: "jewelery" },
    { name: "Men's clothing", value: "4", category: "men's clothing" },
    { name: "Women's clothing", value: "5", category: "women's clothing" },
  ];
  useEffect(() => {
    axios
      .get("https:fakestoreapi.com/products")
      .then((response) => {
        setProduct([...response.data]);
      })
      .catch((error) => {
        console.log("error from products line: 19", error);
      });
  }, []);

  const handleCart = (item) => {
    const cartItems = [...cart];
    cartItems.push(item);
    setCart(cartItems);
  };
  // useEffect(() => {
  //     document.querySelectorAll(".button").forEach((button) =>
  //         button.addEventListener("click", (e) => {
  //             if (!button.classList.contains("loading")) {
  //                 button.classList.add("loading");
  //                 setTimeout(() => button.classList.remove("loading"), 3700);
  //             }
  //             e.preventDefault();
  //         })
  //     );
  // });
  return (
    <>
      <Divider orientation="left" style={{ fontSize: "2rem" }}>
        Latest Products
      </Divider>
      <div className="categories">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="Grid">
        {product.map((row, i) => {
          if (row.category == radios[radioValue - 1].category) {
            // console.log(row);
            return (
              <ProductCard cart={cart} setCart={setCart} row={row} key={i} />
            );
          } else if (radios[radioValue - 1].category == "all") {
            return (
              <ProductCard cart={cart} setCart={setCart} row={row} key={i} />
            );
          }
        })}
      </div>
    </>
  );
};
export default Products;
