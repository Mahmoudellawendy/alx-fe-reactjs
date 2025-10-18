import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,           // البيانات تعتبر "حديثة" لمدة 5 دقائق
    cacheTime: 1000 * 60 * 10,          // البيانات تبقى بالكاش 10 دقائق
    refetchOnWindowFocus: true,        // يعيد الجلب تلقائيًا عند الرجوع للنافذة
    keepPreviousData: true,            // يحافظ على البيانات القديمة عند refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        🔄 {isFetching ? 'Refreshing...' : 'Reload Posts'}
      </button>

      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
