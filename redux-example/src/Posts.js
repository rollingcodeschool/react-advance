import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, obtenerPosts } from "./slices/CarritoSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(obtenerPosts);
  const loading = useSelector((state) => state.kevin.loading);

  const fetchData = () => dispatch(fetchPosts());

  useEffect(() => {
    if (!posts.length) {
      fetchData();
    }
  }, []);

  if (loading) return "Cargando...";

  return (
    <ul>
      {posts.map((post) => (
        <li>{post.id}</li>
      ))}
    </ul>
  );
};

export default Posts;
