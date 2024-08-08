import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../data/apiPath';
import './AddArticle.css';

const AddArticle = ({ onSubmit, articleToEdit, onUpdate }) => {
  const [title, setTitle] = useState(articleToEdit ? articleToEdit.title : '');
  const [author, setAuthor] = useState(articleToEdit ? articleToEdit.author : '');
  const [content, setContent] = useState(articleToEdit ? articleToEdit.content : '');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState(articleToEdit && articleToEdit.image ? `${API_URL}/uploads/${articleToEdit.image}` : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      let response;
      if (articleToEdit) {
        response = await onUpdate(articleToEdit._id, formData);
      } else {
        response = await onSubmit(formData);
      }

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Article processed successfully!');
        if (response.data.article && response.data.article.image) {
          setUploadedImageUrl(`${API_URL}/uploads/${response.data.article.image}`);
        }
        setErrorMessage('');
        setTitle('');
        setAuthor('');
        setContent('');
        setImage(null);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('There was an error processing the article!');
      setSuccessMessage('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{articleToEdit ? 'Edit Article' : 'Add New Article'}</h5>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea 
              className="form-control"
              placeholder="Content"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input 
              type="file" 
              className="form-control-file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          {uploadedImageUrl && (
            <div className="form-group">
              <label>Uploaded Image</label>
              <div>
                <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            {articleToEdit ? 'Update Article' : 'Add Article'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
