import React, { useState } from 'react';
import './AddArticle.css';
import { API_URL } from '../../data/apiPath';
import axios from 'axios';


const AddArticle = ({ onSubmit, articleToEdit, onUpdate }) => {
  const [title, setTitle] = useState(articleToEdit ? articleToEdit.title : '');
  const [author, setAuthor] = useState(articleToEdit ? articleToEdit.author : '');
  const [content, setContent] = useState(articleToEdit ? articleToEdit.content : '');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting article:', { title, author, content, image });
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    if (image) formData.append('image', image);
  
    try {
      if (articleToEdit) {
        console.log('Updating article with ID:', articleToEdit._id);
        await onUpdate(articleToEdit._id, formData);
      } else {
        await onSubmit(formData);
      }
      setSuccessMessage('Article processed successfully!');
      setErrorMessage('');
      setTitle('');
      setAuthor('');
      setContent('');
      setImage(null);
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
              name='title'
              className="form-control" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input 
              type="text" 
              name='author'
              className="form-control" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea 
              className="form-control" 
              name='content'
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;