import React from "react";
import styles from "./posts.module.css";
import Card from "./Card";
const Blog = async () => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const data = await res.json();
  //       setPosts(data);
  //     };
  //     fetchData();
  //   }, []);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Card id={post.id} title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
};

export default Blog;
