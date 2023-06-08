import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Routes, route } from "react-router-dom";s
import { Link, Navigate } from "react-router-dom";
// import App from "./App";
import Products from "./Products";
import { ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fa-solid fa-store "></i>
            Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>{" "}
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products/category/jewelery">
                  Jewelery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/category/mens">
                  Men's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/category/womens">
                  Women's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/category/electronics">
                  Electronics
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <ButtonGroup>
              <Button as={Link} to="/login" variant="outline-primary">
                Log In
              </Button>{" "}
              <Button as={Link} to="/login" variant="outline-success">
                Sign Up
              </Button>{" "}
            </ButtonGroup>{" "}
            <Button
              as={Link}
              variant="outline-warning"
              style={{ width: "80px", marginLeft: "10px" }}
              // onClick={() => <Navigate to="/cart" />}
              to="/cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
