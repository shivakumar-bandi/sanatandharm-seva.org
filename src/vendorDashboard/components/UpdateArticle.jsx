import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../data/apiPath';
// import './UpdateArticle.css'; // Optional: Create CSS if needed

const UpdateArticle = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/articles/${id}`);
        const { title, author, content, image } = response.data;
        setTitle(title);
        setAuthor(author);
        setContent(content);
        setImage(image);
      } catch (error) {
        console.error('Error fetching article:', error);
        setErrorMessage('Error fetching article.');
      }
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await axios.put(`${API_URL}/api/articles/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Article updated successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating the article:', error);
      setErrorMessage('Error updating the article.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Update Article</h5>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArticle;
