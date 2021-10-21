import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //   const { id, title, category } = products[0];
  //   console.log(products);

  const renderListProducts = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Col xl={3} lg={3}>
        <NavLink to={`product/${id}`}>
          <Card key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title} </Card.Title>
              <h6>$ {price}</h6>
              <p>{category}</p>
            </Card.Body>
          </Card>
        </NavLink>
      </Col>
    );
  });

  return <>{renderListProducts}</>;
};

export default ProductComponent;
