import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Book.scss";
import BookItem from "./BookItem";
import { getBooks } from "../../store/actions/bookActions";
import { addKeyword } from "../../store/actions/keywordActions";

function Book(props) {
  const { books, getBooks, keyword } = props;
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="books-container">
      {books.map((book) => {
        if (
          book.name.toUpperCase().search(keyword.toUpperCase()) !== -1 ||
          book.author.toUpperCase().search(keyword.toUpperCase()) !== -1
        ) {
          return (
            <BookItem
              key={book.id}
              book={book}
              imgUrl={book.url}
              name={book.name}
              author={book.author}
              price={book.price}
              type={book.category}
              description={book.description}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
  addKeyword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books.books,
  keyword: state.keyword.keyword,
});

export default connect(mapStateToProps, { getBooks, addKeyword })(Book);
