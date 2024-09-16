import Card from "@/app/blog/Card";
import React from "react";

const Post = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <div>
      <Card title={post.title} body={post.body} />
    </div>
  );
};

export default Post;
