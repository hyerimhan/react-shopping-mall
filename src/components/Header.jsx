import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex gap-5">
        <Link to="/products">products</Link>
        <Link to="/carts">carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
