import React, { useState } from "react";
import PostFormWithoutID from "./components/PostFormWithoutID";
import PostList from "./components/PostList";
// import PostForm from "./components/UI/PostForm";
import MySpan from "./components/UI/span/MySpan";
import PostForm from "./components/PostForm";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [pay, setPay] = useState({});

  const findPost = (newPost) => {
    setPosts([newPost])
    setPay(posts)
  }


  return (
    <div className="App">
      <div className="HeaderSpan">
        <MySpan>Найди свои показатели и долг на оплату по номер счета</MySpan>
      </div>
      <PostForm find={findPost} />
      <div className="HeaderSpan">
        <MySpan>Найди свои показатели и долг на оплату по адресу</MySpan>
      </div>
      <PostFormWithoutID find={findPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;