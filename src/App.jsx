import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './vendorDashboard/pages/LandingPage';
import Login from './vendorDashboard/components/forms/Login';
import Register from './vendorDashboard/components/forms/Register';
import AddArticle from './vendorDashboard/components/forms/AddArticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ArticleTable from './vendorDashboard/components/ArticleTable';
import AddEvent from './vendorDashboard/components/forms/AddEvent';
import EventList from './vendorDashboard/components/EventList';
import AddFestival from './vendorDashboard/components/forms/AddFestival';
import FestivalList from './vendorDashboard/components/FestivalList';
import NotFound from './vendorDashboard/components/NotFound';
import { API_URL } from './vendorDashboard/data/apiPath';
import EditFestival from './vendorDashboard/components/EditFestival';
import Welcome from './vendorDashboard/components/Welcome';
import ArticleHead from './vendorDashboard/components/ArticleHead';
import EventHeader from './vendorDashboard/components/EventHeader';
import FestivalHeader from './vendorDashboard/components/FestivalHeader';
import Donation from './vendorDashboard/components/Donation';
import Team from './vendorDashboard/components/Team';
import Updates from './vendorDashboard/components/Updates';


const App = () => {
    const navigate = useNavigate();
    

    const fetchFestivals = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/festivals`);
            console.log('Fetched festivals:', response.data);
        } catch (error) {
            console.error('Error fetching festivals:', error.response ? error.response.data : error.message);
        }
    };

    const handleCreateArticle = async (formData) => {
        try {
            await axios.post(`${API_URL}/api/articles`, formData);
            navigate('/article-list');
        } catch (error) {
            console.error('Error creating article:', error.response ? error.response.data : error.message);
        }
    };

    const handleUpdateArticle = async (id, formData) => {
        try {
            await axios.put(`${API_URL}/api/articles/${id}`, formData);
            navigate('/article-list');
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
        <Routes>
            <Route path="/" element={<LandingPage handleCreateArticle={handleCreateArticle} handleUpdateArticle={handleUpdateArticle} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-article" element={<AddArticle onSubmit={handleCreateArticle} onUpdate={handleUpdateArticle} />} />
            <Route path="/article-list" element={<ArticleTable header={<ArticleHead />} onEdit={handleUpdateArticle} onDelete={handleCreateArticle}/>} />
            <Route path="/add-event" element={<AddEvent onSubmit={handleCreateEvent} onUpdate={handleUpdateEvent} onEditSuccess={handleEditSuccess}/>} />
            <Route path="/event-list" element={<EventList  eventheader = {< EventHeader />} />} />
            <Route path="/add-festival" element={<AddFestival fetchFestivals={fetchFestivals} setEditMode={setEditMode}/>} />
            <Route path="/festival-list" element={<FestivalList festivalheader = {< FestivalHeader />} onEdit={(id) => navigate(`/edit-festival/${id}`)} />} />
            <Route path="/edit-festival/:id" element={<EditFestival fetchFestivals={fetchFestivals} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/donation" element={<Donation />} />
            <Route path= "/team" element={<Team/>}/>
            <Route path='/updates' element={<Updates/>}/>
            
        </Routes>
       
    );
    
}

export default App;
