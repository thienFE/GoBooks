import React from "react";
import { handlePrice } from "../../helpers/hanlePrice";

function BookDetail(props) {
  const { imgUrl, name, author, price, type, description, setIsDetail } = props;
  return (
    <>
      <div className="overlay" onClick={() => setIsDetail(false)}></div>
      <div className="book-detail">
        <div className="wrapper">
          <div className="book-item">
            <img src={imgUrl} alt={`${name}-detail`} />
            <div className="book-info">
              <p className="name">{name}</p>
              <p className="author">{author}</p>
              <span className="price">{handlePrice(price)}</span>
              <span className="type">{type}</span>
            </div>
            <p className="des">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
