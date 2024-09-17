import Card from "@/app/(layout-group)/blog/Card";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  //[{id:"1"},{id:"2"}]
  return res.map((post) => ({ id: String(post.id) }));
};

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return {
    title: res.title,
    description: res.body,
  };
}

const Post = async ({ params }) => {
  const { id } = params;
  let post;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
    if (Object.keys(post).length == 0) throw new Error("404 not found");
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <Card title={post.title} body={post.body} />
    </div>
  );
};

export default Post;
