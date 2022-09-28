import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import MySpan from "./components/UI/span/MySpan";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, fio: 'Кирилл киролв кирылола', price: 1234 }
  ])

  const findPost = (newPost) => {
    setPosts([newPost])
    //console.log(newPost)
  }


  return (
    <div className="App">
      <div className="HeaderSpan">
        <MySpan>Найди свои показатели и долг на оплату</MySpan>
      </div>
      <PostForm find={findPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
