import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../data/apiPath';
import './AddArticle.css';

const ArticleTable = ({ header, onEdit, onDelete }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/articles`);
            console.log('Articles fetched:', response.data);
            setArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleEdit = (article) => {
        onEdit(article);
    };

    const handleDelete = async (articleId) => {
        try {
            await axios.delete(`${API_URL}/api/articles/${articleId}`);
            fetchArticles();
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    console.log('ArticleTable rendered with articles:', articles);

    return (
        <div className="table-container">
            {console.log('Header component:', header)}
            {header}
            <h2>Articles</h2>
            {articles.length === 0 ? (
                <p>No articles available</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article._id}>
                                <td>{article.title}</td>
                                <td>{article.author}</td>
                                <td>{article.content}</td>
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
                                    <button onClick={() => handleEdit(article)}>Edit</button>
                                    <button onClick={() => handleDelete(article._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ArticleTable;
