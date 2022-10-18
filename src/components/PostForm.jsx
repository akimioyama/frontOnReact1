import React, { useState } from "react";
import "../styles/App.css";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
// import axios from "axios";

const PostForm = ({ find }) => {
  const [title, setTitle] = useState("");

  const findPost = (e) => {
    e.preventDefault();
    console.log(title);
    const axios = require("axios").default;
    axios
      .get("http://localhost:47127/api/users/" + title)
      .then(function (response) {
        const newPost = {
          id: title,
          fio: response.data[0],
          price: response.data[1],
        };
        console.log(newPost);
        find(newPost);
        setTitle("");
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  return (
    <form action="" className="form">
      <div className="form_input">
        <MyInput
          type="text"
          placeholder="Введи № счета..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form_btn">
        <MyButton onClick={findPost}>Найти</MyButton>
      </div>
      <div>
        <hr className="root_hr" color="teal" />
      </div>
    </form>
  );
};
export default PostForm;
