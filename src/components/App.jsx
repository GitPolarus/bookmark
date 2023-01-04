import React, { useState, useEffect } from "react";
import Bookmark from "./bookmark";
import Modal from "./modal";
import "./styles/App.scss";

function App() {
  const [displayModal, setdisplayModal] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("bookmarks")) {
      setBookmarks([...JSON.parse(localStorage.getItem("bookmarks"))]);
    }
  }, []);

  function handleDisplayModal() {
    setdisplayModal(true);
  }

  function handleCloseModal() {
    setdisplayModal(false);
  }

  function addBookmark(bookmark) {
    let bms = bookmarks;
    bms.push(bookmark);
    setBookmarks([...bms]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function removeBookmark(index) {
    let bms = bookmarks;
    bms.splice(index, 1);
    setBookmarks([...bms]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  return (
    <div className="app">
      {displayModal ? (
        <Modal
          display
          onClose={handleCloseModal}
          handleAddBookmark={addBookmark}
        />
      ) : (
        <></>
      )}

      <header>
        <h2 onClick={handleDisplayModal}>Add New Bookmark</h2>
      </header>
      <div className="container">
        {bookmarks.map((item, key) => {
          return (
            <Bookmark
              key={key}
              name={item.name}
              url={item.url}
              index={key}
              handleDelete={removeBookmark}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
