import React from 'react';
import './EventCard.css'; // Ensure this file exists and is properly styled
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom'; 

const EventCard = ({ event, onEdit, onDelete }) => {
  const { user } = useUser();

  const navigate = useNavigate();

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <div className="event-card">
      {event.image && <img src={`http://localhost:5000/uploads/${event.image}`} alt={event.title} />}
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      {canEditOrDelete && (
        <>
   <button onClick={() => onEdit(event)}>Edit</button>
   <button onClick={() => onDelete(event._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default EventCard;
