import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <section id="header">
        <Navbar className="shadow-lg">
          <Container>
            <NavLink to="/">Fake Shop</NavLink>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
