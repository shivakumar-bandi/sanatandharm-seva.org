import React from 'react';
import './FestivalCard.css';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../data/apiPath';

const FestivalCard = ({ festival, onEdit, onDelete }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <div className="festival-card">
      {festival.image && (
        <img
          src={`${API_URL}/uploads/${festival.image}`}
          alt={festival.title}
        />
      )}
      <div className="festival-card-content">
        <h3>{festival.title}</h3>
        <p>{festival.description}</p>
        <p>Date: {new Date(festival.date).toLocaleDateString()}</p>
        <p>Location: {festival.location}</p>
        {canEditOrDelete && (
          <div className="festival-card-actions">
            <button onClick={() => onEdit(festival)}>Edit</button>
            <button onClick={() => onDelete(festival._id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FestivalCard;
