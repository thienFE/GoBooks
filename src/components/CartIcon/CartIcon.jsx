import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PropTypes from "prop-types";
import "./CartIcon.scss";
import { connect } from "react-redux";

function CartIcon({ carts }) {
  const displayQuantityCarts = (carts) => {
    const result = carts.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    return result < 100 ? result : "99+";
  };
  console.log("Giỏ hàng hiện tại: ", carts);
  return (
    <span className="cart-wrapper">
      <span className="cart-quantity">{displayQuantityCarts(carts)}</span>
      <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
    </span>
  );
}

CartIcon.propTypes = {
  carts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  carts: state.carts.carts,
});

export default connect(mapStateToProps, {})(CartIcon);
