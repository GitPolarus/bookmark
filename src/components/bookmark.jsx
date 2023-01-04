import React from "react";
import "./styles/bookmark.scss";
const Bookmark = ({ name, url, index, handleDelete }) => {
  let icon = `https://s2.googleusercontent.com/s2/favicons?domain=${url}`;
  return (
    <div className="bookmark">
      <i
        onClick={() => {
          handleDelete(index);
        }}
        className="bx bx-x"
      ></i>
      <div className="name">
        <img src={icon} alt="Favicon" />
        <a href={url} target="_blank">
          {name}
        </a>
      </div>
    </div>
  );
};

export default Bookmark;
