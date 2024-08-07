import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { API_URL } from './vendorDashboard/data/apiPath';

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

function App() {
  const navigate = useNavigate();

  const handleArticleSubmit = async (articleData) => {
    try {
      const response = await axios.post(`${API_URL}/api/articles`, articleData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        navigate('/');
        return response;
      } else {
        console.error('Failed to add article');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const handleArticleUpdate = async (id, articleData) => {
    try {
      const response = await axios.put(`${API_URL}/api/articles/${id}`, articleData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        navigate('/');
        return response;
      } else {
        console.error('Failed to update article');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-article" element={<AddArticle onSubmit={handleArticleSubmit} />} />
              <Route path="/add-article/:id" element={<AddArticle onUpdate={handleArticleUpdate} />} />
              <Route path="/articles" element={<ArticleTable header="Articles" />} />
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/add-festival" element={<AddFestival />} />
              <Route path="/festivals" element={<FestivalList />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
}

export default App;
