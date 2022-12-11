import React, { useState } from "react";
import PostFormWithoutID from "../components/PostFormWithoutID";
import PostList from "../components/PostList";
// import PostForm from "./components/UI/PostForm";
import MySpan from "../components/UI/span/MySpan";
import PostForm from "../components/PostForm";
import '../styles/App.css';

function Main() {

  const [posts, setPosts] = useState([])
  const [pay, setPay] = useState({});

  const findPost = (newPost) => {
    setPosts([newPost])
    setPay(posts)
  }


  return (
    <div className="App">

      <div className="leftleft">
        <MySpan>Найди свои показатели и долг на оплату по номер счета</MySpan>
        <PostForm find={findPost} />
        <MySpan>Найди свои показатели и долг на оплату по адресу</MySpan>
        <PostFormWithoutID find={findPost} />
      </div>

      <div className="rightright">
        <PostList posts={posts} />
      </div>
     
    </div>
  );
}

export default Main;