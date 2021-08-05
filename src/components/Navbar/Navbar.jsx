import React from "react";
import { ShoppingCart } from "@material-ui/icons";
const Navbar = () => {
  return (
    <>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src={process.env.PUBLIC_URL + "d512.png"}
              alt="Deadline store"
              width="28"
              height="28"
            />
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="tags has-addons">
                <span class="tag">
                  <ShoppingCart />
                </span>
                <span class="tag is-danger">2</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
