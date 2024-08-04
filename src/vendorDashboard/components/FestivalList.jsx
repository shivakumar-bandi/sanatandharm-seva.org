import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FestivalCard from './FestivalCard';
import './FestivalList.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const FestivalList = ({ onEdit, festivalheader }) => {
  console.log('Rendering FestivalList');
  const [festivals, setFestivals] = useState([]);
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/festivals`);
        setFestivals(response.data);
      } catch (error) {
        console.error('Error fetching Festivals:', error);
      }
    };

    fetchFestivals();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this Festival?')) {
      try {
        await axios.delete(`${API_URL}/api/festivals/${id}`);
        setFestivals(festivals.filter((festival) => festival._id !== id));
      } catch (error) {
        console.error('Error deleting festival:', error);
      }
    }
  };

  const handleEdit = (festival) => {
    console.log(`Editing festival with id: ${festival._id}`);
    // Add navigation to the edit page or handling logic
  };

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <>
      <div className="header">
        {festivalheader}
        {canEditOrDelete && (
          <button onClick={() => navigate('/add-festival')} className="btn btn-primary">Add New Festival</button>
        )}
      </div>
      <div className="festival-list">
        {festivals.map((festival) => (
          <FestivalCard
            key={festival._id}
            festival={festival}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default FestivalList;
