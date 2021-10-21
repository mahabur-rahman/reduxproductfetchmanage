import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Container, Row, Col, Image } from "react-bootstrap";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, image, title, description, price, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error found !", err);
      });

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      <section id="productDetails">
        <Container>
          <Row>
            <Col xl={8} lg={8} md={6} className="mx-auto">
              {Object.keys(product).length === 0 ? (
                <h2>Loading ...</h2>
              ) : (
                <div className="desc_div" key={id}>
                  <Image src={image} alt={title} fluid />
                  <h3>{title}</h3>
                  <h6>$ {price}</h6>
                  <h5>{category}</h5>
                  <p>{description}</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
