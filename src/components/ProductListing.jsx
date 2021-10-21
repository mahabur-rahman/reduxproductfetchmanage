import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { Container, Row, Col } from "react-bootstrap";
// actions
import { setProducts } from "../redux/actions/productActions";
// data fetching by axios 👍
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products);

  //   axios 😄

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("This is an Error like this", err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products : ", products);

  return (
    <>
      <section id="productListing">
        <Container>
          <Row>
            <ProductComponent />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListing;
