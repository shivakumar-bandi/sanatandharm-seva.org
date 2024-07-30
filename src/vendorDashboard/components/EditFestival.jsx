import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../data/apiPath';
import './EditFestival.css'; // Import the CSS file

const EditFestival = ({ fetchFestivals }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [festival, setFestival] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchFestival = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/festivals/${id}`);
        const festivalData = response.data;
        setFestival(festivalData);
        setTitle(festivalData.title);
        setDescription(festivalData.description);
        setDate(festivalData.date);
        setLocation(festivalData.location);
        setImage(festivalData.image);
      } catch (error) {
        console.error('Error fetching festival:', error);
      }
    };

    fetchFestival();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('location', location);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`${API_URL}/api/festivals/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      await fetchFestivals(); // Refresh the festival list
      navigate('/festival-list');
    } catch (error) {
      console.error('Error updating festival:', error);
    }
  };

  return (
    <div className="edit-festival-container">
      <h2>Edit Festival</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditFestival;
