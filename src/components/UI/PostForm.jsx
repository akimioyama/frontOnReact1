import React, { useState } from "react";
import "../../styles/App.css";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import axios from "axios";

const PostForm = ({ find }) => {
  const [title, setTitle] = useState("");

  const findPost = (e) => {
    e.preventDefault();
    const axios = require("axios").default;
    axios
      .get("https://localhost:3000/API/Home/get", {
        params: {
          id: title,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const newPost = {
      id: title,
    };
    find(newPost);
    setTitle("");
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
