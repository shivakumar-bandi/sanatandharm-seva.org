import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const LandingPage = lazy(() => import('./vendorDashboard/pages/LandingPage'));
const Login = lazy(() => import('./vendorDashboard/components/forms/Login'));
const Register = lazy(() => import('./vendorDashboard/components/forms/Register'));
const AddArticle = lazy(() => import('./vendorDashboard/components/forms/AddArticle'));
const ArticleTable = lazy(() => import('./vendorDashboard/components/ArticleTable'));
const AddEvent = lazy(() => import('./vendorDashboard/components/forms/AddEvent'));
const EventList = lazy(() => import('./vendorDashboard/components/EventList'));
const AddFestival = lazy(() => import('./vendorDashboard/components/forms/AddFestival'));
const FestivalList = lazy(() => import('./vendorDashboard/components/FestivalList'));
const NotFound = lazy(() => import('./vendorDashboard/components/NotFound'));
const EditFestival = lazy(() => import('./vendorDashboard/components/EditFestival'));
const Welcome = lazy(() => import('./vendorDashboard/components/Welcome'));
const Donation = lazy(() => import('./vendorDashboard/components/Donation'));
const Team = lazy(() => import('./vendorDashboard/components/Team'));
const Updates = lazy(() => import('./vendorDashboard/components/Updates'));
const ArticleHead = lazy(() => import('./vendorDashboard/components/ArticleHead'));
const EventHeader = lazy(() => import('./vendorDashboard/components/EventHeader'));
const FestivalHeader = lazy(() => import('./vendorDashboard/components/FestivalHeader'));

import { API_URL } from './vendorDashboard/data/apiPath';

const App = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    const handleLoginSuccess = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        delete axios.defaults.headers.common['Authorization'];
        navigate('/login');
    };

    const fetchFestivals = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/festivals/`);
            console.log('Fetched festivals:', response.data);
        } catch (error) {
            console.error('Error fetching festivals:', error.response ? error.response.data : error.message);
        }
    };

    const handleCreateArticle = async (formData) => {
        try {
            const response = await axios.post(`${API_URL}/api/articles`, formData);
            if (response.status === 200 || response.status === 201) {
                navigate('/article-list');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error creating article:', error.response ? error.response.data : error.message);
        }
    };
    
    const handleUpdateArticle = async (id, formData) => {
        try {
            const response = await axios.put(`${API_URL}/api/articles/${id}`, formData);
            if (response.status === 200) {
                navigate('/article-list');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error updating article:', error.response ? error.response.data : error.message);
        }
    };

    const handleCreateEvent = async (formData) => {
        try {
            await axios.post(`${API_URL}/api/events`, formData);
            navigate('/event-list');
        } catch (error) {
            console.error('Error creating event:', error.response ? error.response.data : error.message);
        }
    };

    const handleUpdateEvent = async (id, formData) => {
        try {
            await axios.put(`${API_URL}/api/events/${id}`, formData);
            navigate('/event-list');
        } catch (error) {
            console.error('Error updating event:', error.response ? error.response.data : error.message);
        }
    };

    const handleEditSuccess = (data) => {
        console.log('Edit success:', data);
        navigate('/event-list');
    };

    const setEditMode = (mode) => {
        console.log('Edit mode set to:', mode);
    };

    return (
        <Router>
            <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<LandingPage handleCreateArticle={handleCreateArticle} handleUpdateArticle={handleUpdateArticle} />} />
                    <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/add-article" element={<AddArticle onSubmit={handleCreateArticle} onUpdate={handleUpdateArticle} />} />
                    <Route path="/article-list" element={<ArticleTable header={<ArticleHead />} onEdit={handleUpdateArticle} onDelete={handleCreateArticle} />} />
                    <Route path="/add-event" element={<AddEvent onSubmit={handleCreateEvent} onUpdate={handleUpdateEvent} onEditSuccess={handleEditSuccess} />} />
                    <Route path="/event-list" element={<EventList eventheader={<EventHeader />} />} />
                    <Route path="/add-festival" element={<AddFestival fetchFestivals={fetchFestivals} setEditMode={setEditMode} />} />
                    <Route path="/festival-list" element={<FestivalList festivalheader={<FestivalHeader />} onEdit={(id) => navigate(`/edit-festival/${id}`)} />} />
                    <Route path="/edit-festival/:id" element={<EditFestival fetchFestivals={fetchFestivals} />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/donation" element={<Donation />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/updates" element={<Updates />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
