import React, { useState, useEffect } from 'react';
import './AddEvent.css';
import axios from 'axios';
import { API_URL } from '../../data/apiPath';

const AddEvent = ({ eventToEdit, onEditSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setDescription(eventToEdit.description);
      setDate(eventToEdit.date);
      setLocation(eventToEdit.location);
      setImage(null); // Reset image input
    }
  }, [eventToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('location', location);
    if (image) {
      formData.append('image', image);
    }

    try {
      let response;
      if (eventToEdit && eventToEdit._id) {
        response = await axios.put(`${API_URL}/api/events/${eventToEdit._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await axios.post(`${API_URL}/api/events`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      setSuccessMessage(eventToEdit ? 'Event updated successfully!' : 'Event added successfully!');
      setErrorMessage('');
      onEditSuccess(response.data);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'There was an error processing the event. Please try again.');
      setSuccessMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <form className="add-event-form" onSubmit={handleSubmit}>
        <h2 className="card-title">{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>
        {loading && <div className="loading-spinner"></div>}
        {successMessage && <div className="popup-message success-message">{successMessage}</div>}
        {errorMessage && <div className="popup-message error-message">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            className="form-control"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            className="form-control"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            className="form-control"
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className="btn-primary" type="submit">
          {eventToEdit ? 'Update Event' : 'Add Event'}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
