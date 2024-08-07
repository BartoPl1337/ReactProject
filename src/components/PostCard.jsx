import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <div key={props.id} className="my-6">
      <h2>{props.title}</h2>
      <Link to={`/post/${props.id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
