import React, { useState } from "react";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import PropTypes from "prop-types";
import { addKeyword } from "../../store/actions/keywordActions";
import "./SearchZone.scss";

function SearchZone(props) {
  const { addKeyword } = props;
  const [inputValue, setInputValue] = useState("");

  const handleSearching = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (inputValue !== ".") {
        addKeyword(inputValue);
      }
    }
    setInputValue("");
  };

  return (
    <div className="search-zone">
      <form onSubmit={(e) => handleSearching(e)}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Nhập tên sách hoặc tên tác giả..."
          value={inputValue}
        />
        <button onClick={(e) => handleSearching(e)} type="submit">
          Search
        </button>
        <button onClick={() => addKeyword("")} className="all-btn">All</button>
        <CartIcon />
      </form>
    </div>
  );
}

SearchZone.propTypes = {
  keyword: PropTypes.string.isRequired,
  addKeyword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  keyword: state.keyword.keyword,
});

export default connect(mapStateToProps, { addKeyword })(SearchZone);
