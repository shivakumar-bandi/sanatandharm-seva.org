import React from 'react';
import AddArticle from './AddArticle';
import axios from 'axios';

const UpdateArticle = ({ article, onArticleUpdated }) => {
  const updateArticle = async (articleId, formData) => {
    const response = await axios.put(`http://localhost:5000/api/articles/${articleId}`, formData);
    onArticleUpdated(response.data);
    return response;
  };

  return (
    <div>
      <h2>Update Article</h2>
      <AddArticle articleToEdit={article} onUpdate={updateArticle} />
    </div>
  );
};

export default UpdateArticle;
