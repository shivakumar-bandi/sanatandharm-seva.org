import React, { useState, useEffect } from 'react';
import './AddFestival.css';
import { API_URL } from '../../data/apiPath';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFestival = ({ festival, setEditMode, fetchFestivals }) => {
  console.log('Rendering AddFestival');
  const [title, setTitle] = useState(festival ? festival.title : '');
  const [description, setDescription] = useState(festival ? festival.description : '');
  const [date, setDate] = useState(festival ? festival.date : '');
  const [location, setLocation] = useState(festival ? festival.location : '');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (festival) {
      setTitle(festival.title);
      setDescription(festival.description);
      setDate(festival.date);
      setLocation(festival.location);
      setImage(festival.image);
    }
  }, [festival]);

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
      if (festival && festival._id) {
        await axios.put(`${API_URL}/api/festivals/${festival._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setSuccessMessage('Festival updated successfully!');
      } else {
        await axios.post(`${API_URL}/api/festivals`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setSuccessMessage('Festival added successfully!');
      }

      setErrorMessage('');
      fetchFestivals();
      setEditMode(false);

      if (typeof setEditMode === 'function') {
        setEditMode(false);
      } else {
        console.error('setEditMode is not a function');
      }
      navigate('/festival-list');
    } catch (error) {
      console.error('There was an error uploading the image!', error);
      console.error('Error response:', error.response);
      setErrorMessage('There was an error uploading the image!');
      setSuccessMessage('');
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">{festival ? 'Edit Festival' : 'Add Festival'}</h2>
      {successMessage && <div className="popup-message success-message">{successMessage}</div>}
      {errorMessage && <div className="popup-message error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            className="form-control"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            className="form-control"
            id="image"
            name="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className="btn-primary" type="submit">
          {festival ? 'Update Festival' : 'Add Festival'}
        </button>
      </form>
    </div>
  );
};

export default AddFestival;
