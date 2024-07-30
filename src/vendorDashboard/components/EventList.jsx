import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import { API_URL } from '../data/apiPath';
import './EventList.css'; // Ensure this CSS file is imported
import { useNavigate } from 'react-router-dom'; 

import { useUser } from '../contexts/UserContext';

const EventList = ({ eventheader,onEdit }) => {
  console.log('Rendering EventList');
  const [events, setEvents] = useState([]);

  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/events/events`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this Event?')){
      try {
        await axios.delete(`${API_URL}/api/events/events/${id}`);
        setEvents(events.filter(event => event._id !== id));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    };
    }

    const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
  <>
    <div className="header">
        {eventheader}
        {canEditOrDelete && (
          <button onClick={() => navigate('/add-event')} className="btn btn-primary">Add New Event</button>
        )}
      </div>
    <div className="event-list">
      
      {events.map(event => (
        <EventCard 
          key={event._id} 
          event={event} 
          onEdit={onEdit} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  </>
  );
};

export default EventList;
