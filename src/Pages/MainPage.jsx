import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const MainPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    function fetchPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
        setPost(res.data);
      });
    }
    fetchPost();
    return () => {};
  }, []);
  return (
    <div>
      {/* {post.length === 0 && (
        <div>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="my-6">
                <div className="h-4 bg-gray-300 animate-pulse w-52"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-52"></div>
            </div>
          ))}
        </div>
      )} */}

      {post.map((post) => (
        <PostCard id={post.id} title={post.title} />
      ))}
    </div>
  );
};

export default MainPage;
