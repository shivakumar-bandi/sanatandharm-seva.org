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

  useEffect(() => {
    if (eventToEdit) {
      console.log('Editing event:', eventToEdit);
      setTitle(eventToEdit.title);
      setDescription(eventToEdit.description);
      setDate(eventToEdit.date);
      setLocation(eventToEdit.location);
      setImage(null); // Reset image input
    }
  }, [eventToEdit]);

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
      let response;
      if (eventToEdit && eventToEdit._id) {
        console.log(`Updating event with ID: ${eventToEdit._id}`);
        response = await axios.put(`${API_URL}/api/events/events/${eventToEdit._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        console.log('Creating new event');
        response = await axios.post(`${API_URL}/api/events/events`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      console.log('Response data:', response.data);
      setSuccessMessage(eventToEdit ? 'Event updated successfully!' : 'Event added successfully!');
      setErrorMessage('');
      onEditSuccess(response.data); // Pass the updated event data
    } catch (error) {
      console.error('Error details:', error.response || error.message);
      setErrorMessage('There was an error processing the event. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form className="add-event-form" onSubmit={handleSubmit}>
      <h2>{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
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
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
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
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">{eventToEdit ? 'Update Event' : 'Add Event'}</button>
    </form>
  );
};

export default AddEvent;
