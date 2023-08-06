import { useState } from "react";
import SearchBar from "./SearchBar";
import axios from "../api/axios";
import MediaCard from "./Card";
import Typography from "@mui/material/Typography";
const Main = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async (keyword) => {
    try {
      const response = await axios.get("/volumes", {
        params: {
          q: keyword,
        },
          headers: {
            "Content-Type": "application/json",
            Authorization: "AIzaSyA4RlfgcYPxnvIBUCLF-Zqd-L965EKt-pw",
          },
      });
      console.log(response.data);
      setBooks(response.data.items);
      console.log(books);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="h1" component="h2">
        Book Finder
      </Typography>
      <SearchBar fetchBooks={fetchBooks} />
      {/* {books.length > 0 ? <h1>Books</h1> : <h1>No Books</h1>} */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.length > 0 &&
          books.map((book, key) => (
            <div key={key}>
              {
                <MediaCard
                  name={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  link={book.volumeInfo.previewLink}
                />
              }
            </div>
          ))}
      </div>
    </>
  );
};

export default Main;
