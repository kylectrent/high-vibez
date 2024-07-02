import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        src="./assets/shared/desktop/high-vibez.svg"
        alt="logo"
        width={400}
        height={40}
      />
      <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
        <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="./about">
          About
        </Link>
        <Link
          style={{ marginRight: "2rem", fontWeight: "700" }}
          href="./products"
        >
          Products
        </Link>
        <Link
          style={{ marginRight: "2rem", fontWeight: "700" }}
          href="./reviews"
        >
          Reviews
        </Link>
        <Link style={{ marginRight: "2rem", fontWeight: "700" }} href="./about">
          Recipes
        </Link>
      </ul>
      <Image
        src="./assets/shared/desktop/icon-cart.svg"
        alt="cart"
        width={40}
        height={10}
      />
    </Container>
  );
};
