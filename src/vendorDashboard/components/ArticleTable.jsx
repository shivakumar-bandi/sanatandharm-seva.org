import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';
import { API_URL } from '../data/apiPath';
import { useNavigate } from 'react-router-dom';
import './ArticleTable.css';

const ArticleTable = ({ header, onEdit, onDelete }) => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/articles/`);
        console.log('Fetched articles:', response.data);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setErrorMessage('Error fetching articles.');
      }
    };

    fetchArticles();
  }, []);

  const handleEdit = (id) => {
    if (onEdit) {
      onEdit(id);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      console.log('Deleting article with ID:', id);
      try {
        await axios.delete(`${API_URL}/api/articles/${id}`);
        console.log('Article deleted:', id);
        setArticles(articles.filter(article => article._id !== id));
      } catch (error) {
        console.error('Error deleting article:', error);
        setErrorMessage('Error deleting article.');
      }
    }
  };

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';
  console.log('User:', user);
  console.log('Can edit or delete:', canEditOrDelete);

  return (
    <div className="article-table">
      <div className="header">
        {header}
        {canEditOrDelete && (
          <button onClick={() => navigate('/add-article')} className="btn btn-primary">Add New Article</button>
        )}
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Articles List</h5>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan="5">No articles available.</td>
                </tr>
              ) : (
                articles.map((article) => (
                  <tr key={article._id}>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>{article.author}</td>
                    <td>
                      {article.image && (
                        <img 
                          src={`${API_URL}/uploads/${article.image}`} 
                          alt={article.title} 
                          style={{ width: '100px', height: 'auto' }} 
                        />
                      )}
                    </td>
                    <td>
                      {canEditOrDelete && (
                        <>
                          <button onClick={() => handleEdit(article._id)}>Edit</button>
                          <button onClick={() => handleDelete(article._id)}>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticleTable;
