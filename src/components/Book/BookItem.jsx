import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { handlePrice } from "../../helpers/hanlePrice";
import BookDetail from "./BookDetail";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

function BookItem(props) {
  const {
    imgUrl,
    name,
    author,
    price,
    type,
    description,
    book,
    addToCart,
  } = props;
  const [isDetail, setIsDetail] = useState(false);
  return (
    <>
      <div className="book-item">
        <img onClick={() => setIsDetail(true)} src={imgUrl} alt={name} />
        <div className="book-info">
          <p className="name">{name}</p>
          <p className="author">{author}</p>
          <span className="price">{handlePrice(price)}</span>
          <span className="type">{type}</span>
          <FontAwesomeIcon onClick={() => addToCart({...book, quantity: 1})} className="cart-add" icon={faCartPlus} />
        </div>
      </div>
      {isDetail && (
        <BookDetail
          imgUrl={imgUrl}
          name={name}
          author={author}
          price={price}
          type={type}
          description={description}
          setIsDetail={setIsDetail}
        />
      )}
    </>
  );
}

BookItem.propTypes = {
  carts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  carts: state.carts.carts,
});

export default connect(mapStateToProps, { addToCart })(BookItem);
