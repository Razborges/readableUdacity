import { URL, headers, takeError } from './consts';

export const fetchCategories = () =>
  fetch(`${URL}/categories`, { headers })
    .then(data => data.json())
    .then(data => data.categories)
    .catch(error => takeError(error));

export const fetchComments = (id) =>
  fetch(`${URL}/posts/${id}/comments`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(error => takeError(error));

export const addComment = (data) =>
  fetch(`${URL}/comments`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(error => takeError(error));

export const voteComment = (id, vote) =>
  fetch(`${URL}/comments/${id}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
    })
    .then(data => data.json())
    .catch(error => takeError(error));
  
export const deleteComment = (id) =>
  fetch(`${URL}/comments/${id}`,
    {
      method: 'DELETE',
      headers
    })
    .then(data => data.json())
    .catch(error => takeError(error));


export const fetchPosts = () =>
  fetch(`${URL}/posts`, { headers })
    .then(data => data.json())
    .catch(error => takeError(error));

export const fetchPostsByCategory = (category) =>
  fetch(`${URL}/${category}/posts`, { headers })
    .then(data => data.json())
    .catch(error => takeError(error));

export const fetchPost = (id) =>
  fetch(`${URL}/posts/${id}`, { headers })
    .then(data => data.json())
    .catch(error => takeError(error));

export const deletePost = (id) =>
  fetch(`${URL}/posts/${id}`,
    {
      method: 'DELETE',
      headers
    })
    .then(data => data.json())
    .catch(error => takeError(error));

export const vote = (id, vote) =>
  fetch(`${URL}/posts/${id}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
    })
    .then(data => data.json())
    .catch(error => takeError(error));

export const addPost = data =>
  fetch(`${URL}/posts`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(error => takeError(error));

export const editPost = (data, id) =>
  fetch(`${URL}/posts/${id}`,
    {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .catch(error => takeError(error));
