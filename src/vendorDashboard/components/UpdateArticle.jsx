import React from 'react';
import AddArticle from '../AddArticle/AddArticle';
import axios from 'axios';
import { API_URL } from '../../data/apiPath';

const UpdateArticle = ({ article, onArticleUpdated }) => {
  const updateArticle = async (articleId, formData) => {
    const response = await axios.put(`${API_URL}/api/articles/${articleId}`, formData);
    onArticleUpdated(response.data);
    return response;
  };

  return (
    <div>
      <AddArticle onSubmit={updateArticle} articleToEdit={article} />
    </div>
  );
};

export default UpdateArticle;
