import { useState } from "react";
const SearchBar = ({fetchBooks}) => {
  const [keyword, setKeyword] = useState("");
  const clickHandler = () => {
    console.log(keyword)
    fetchBooks(keyword)
  };
  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <>
      <div className="col-md-12">
        <div className="col-md-4 col-sm-4 d-flex mx-auto">
          <div className="col-md-10 m-auto">
            <input
              type="book-name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search for any book"
              value={keyword}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2 px-2">
            <button className="btn btn-primary my-3" onClick={clickHandler}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
