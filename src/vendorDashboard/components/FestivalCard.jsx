import React from 'react';
import './FestivalCard.css';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom'; 

const FestivalCard = ({ festival, onEdit, onDelete }) => {
  const { user } = useUser();

  const navigate = useNavigate();

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <div className="event-card">
      {festival.image && (
        <img
          src={`http://localhost:5000/uploads/${festival.image}`}
          alt={festival.title}
        />
      )}
      <h3>{festival.title}</h3>
      <p>{festival.description}</p>
      <p>Date: {new Date(festival.date).toLocaleDateString()}</p>
      <p>Location: {festival.location}</p>
      {canEditOrDelete && (
        <>
      <button onClick={() => onEdit(festival)}>Edit</button>
      <button onClick={() => onDelete(festival._id)}>Delete</button>
      </>
      )}
    
    </div>
  );
};

export default FestivalCard;
