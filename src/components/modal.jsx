import React, { useState, useEffect } from "react";
import InputText from "./input_text";
import "./styles/style.scss";

const Modal = ({ display, onClose, handleAddBookmark }) => {
  const [show, setShow] = useState(false);
  const [inputs, setinputs] = useState({ name: "", url: "https://www." });
  const [disable, setDisable] = useState(true);
  let { name, url } = inputs;
  useEffect(() => {
    setShow(display);
    return () => {};
  }, []);

  function handleClose(event) {
    if (event.target.id == "modal-container") {
      setShow(false);
      onClose();
    }
  }

  const handleChange = (e) => {
    let { name: inputName, value } = e.target;
    setinputs({ ...inputs, [inputName]: value });
    // setinputs((prev) => ({
    //   ...prev,

    //   [inputName]: value,
    // }));
    // if (inputName == "url") {
    //   setinputs({ url: value, name: value.split(".")[1] });
    // }

    if (
      name.trim() != "" &&
      url.trim() != "" &&
      url.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      )
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { name, url } = inputs;
    console.log(name, url);
    handleAddBookmark({ name: name, url: url });
    setShow(false);
    onClose();
  }

  return (
    <div
      onClick={handleClose}
      id="modal-container"
      className={show ? "modal-container" : "modal-container hide"}
    >
      <div className={show ? "modal fade-in" : "modal"}>
        <div className="header">
          <h2>New Book mark</h2>
          <i
            className="bx bx-x"
            onClick={() => {
              setShow(false);
              onClose();
            }}
          ></i>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <InputText
              id="name"
              name="name"
              label="Name"
              value={name}
              onChange={handleChange}
            />

            <InputText
              id="url"
              name="url"
              label="Site Url"
              value={url}
              onChange={handleChange}
            />
            <button disabled={disable} type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
