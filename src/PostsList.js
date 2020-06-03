import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (asyncMethod) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await asyncMethod();
      setData(response.data);
    } catch (error) {
      setError(error.toString());
    }
    setLoading(false);
  }, [asyncMethod]);

  useEffect(() => {
    fetchData();
  }, [asyncMethod, fetchData]);

  return { data, loading, error, fetchData };
};

const API = {
  get: async () => await axios('https://jsonplaceholder.typicode.com/posts'),
};

export const PostsList = () => {
  const { data: posts, fetchData, error, loading } = useFetch(API.get);

  return (
    <ul>
      <button onClick={() => fetchData()}>asdasd</button>
      {error && <span>Error message</span>}
      {!loading && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};
