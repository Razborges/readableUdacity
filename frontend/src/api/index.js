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

export const votePost = async (postId, vote) => {
  try {
    const response = await fetch(`${URL}/posts/${postId}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
    });
    const data = await response.json();
    return data;
  } catch (error) {
      takeError(error)
  }
}

export const editPost = async (post, id) => {
  try {
    const response = await fetch(`${URL}/posts/${id}`,
    {
      method: 'PUT',
      headers,
      body: JSON.stringify(post)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
}

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

export const addComment = async (comment) => {
  try {
    const response = await fetch(`${URL}/comments`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(comment)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
};

export const voteComment = async (id, vote) => {
  try {
    const response = await fetch(`${URL}/comments/${id}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
}
  
export const deleteComment = async (id) => {
  try {
    const response = await fetch(`${URL}/comments/${id}`, { method: 'DELETE', headers });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
}

export const editComment = async (comment, id) => {
  try {
    const response = await fetch(`${URL}/comments/${id}`,
    {
      method: 'PUT',
      headers,
      body: JSON.stringify(comment)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    takeError(error)
  }
}
