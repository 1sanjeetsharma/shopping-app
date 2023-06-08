import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { CartContext } from "./App";
import { useContext } from "react";
import { Rating } from "@mui/material";
const ProductCard = (props) => {
    // const { cart, setCart } = useContext(CartContext);
    useEffect(() => {
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

    const handleCart = (item) => {
        // console.log("hello from product cart adding :", item);
        const cartItems = [...props.cart];
        cartItems.push(item);
        props.setCart(cartItems);
    };
    return (
        <div className="productcard">
            <div className="Grid-item">
                <Link to={"/productdescription/" + props.row.id}>
                    <img
                        variant="top"
                        src={props.row.image}
                        height="200px"
                        width="200px"
                        // className="contain"
                    />
                </Link>
                <h5> {props.row.title}</h5>
                <h5> &#8377;{(80 * props.row.price).toFixed(2)}</h5>
                <span className="text-danger">
                    &#8377;<s>{(90 * props.row.price).toFixed(2)}</s>{" "}
                    {(
                        ((90 * props.row.price - 80 * props.row.price) /
                            (90 * props.row.price)) *
                        100
                    ).toFixed(1)}
                    %off
                </span>

                <p>
                    <Rating
                        name="read-only"
                        value={props.row.rating.rate}
                        readOnly
                    />
                </p>
                <button
                    className="button"
                    onClick={(e) => handleCart(props.row)}
                >
                    <span onClick={(e) => handleCart(props.row)}>
                        Add to cart
                    </span>
                    <div className="cart">
                        <svg viewBox="0 0 36 26">
                            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                        </svg>
                    </div>
                </button>
                <Button variant="primary">Buy Now</Button>
            </div>
        </div>
    );
};
export default ProductCard;
