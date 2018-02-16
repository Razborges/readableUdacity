import { URL, headers, takeError } from './consts';

// CATEGORIES
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${URL}/categories`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
};

// POSTS
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await fetch(`${URL}/posts/${id}`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
};

export const fetchPostsByCategory = async (category) => {
  try {
    const response = await fetch(`${URL}/${category}/posts`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
};

export const addPost = async (post) => {
  try {
    const response = await fetch(`${URL}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
    });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
}

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${URL}/posts/${postId}`,
    {
      method: 'DELETE',
      headers
    });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
}

export const vote = (id, vote) =>
  fetch(`${URL}/posts/${id}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
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

// COMMENTS
export const fetchComments = async (id) => {
  try {
    const response = await fetch(`${URL}/posts/${id}/comments`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
};

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
