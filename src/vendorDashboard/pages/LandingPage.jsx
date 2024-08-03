import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import IndividualIntervalsExample from '../components/IndividualIntervalsExample';
import YouTubeLive from '../components/YouTubeLive';
import LatestArticles from '../components/LatestArticles';
import './LandingPage.css';
import YogasCard from '../components/YogasCard';
import VedhasCard from '../components/VedhasCard';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer2 from '../components/Footer2';
import TestToast from '../components/Simple';
import { TuseTheme } from '../contexts/ThemeContext';

const LandingPage = ({ handleCreateArticle, handleUpdateArticle }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const navigateToArticle = () => navigate('/article-list');
  const navigateToEvent = () => navigate('/event-list');
  const navigateToFestival = () => navigate('/festival-list');

  const cards = [
    {
      image: './axios/14380.jpg',
      title: 'Hindu dharmam',
      description: 'Description for Hindu dharm',
    },
    {
      image: './axios/14416.png',
      title: 'Save Sanatan',
      description: 'Description for Sanatan',
    },
    {
      image: './axios/14420.png',
      title: 'Vedic',
      description: 'Description for Vedic',
    },
    {
      image: './axios/1280.webp',
      title: 'Save Tradition',
      description: 'Description for Tradition',
    },
    {
      image: './axios/12801.jpg',
      title: 'Temples',
      description: 'Description for Temples',
    },
    {
      image: './axios/12802.jpg',
      title: 'Help People',
      description: 'Description for Society',
    },
    {
      image: './axios/12263.jpg',
      title: 'Save Nature',
      description: 'Description for Nature',
    },
    {
      image: './axios/12803.jpg',
      title: 'Motivation',
      description: 'Description for Motivation',
    },
    {
      image: './axios/1657.jpg',
      title: 'Our Culture',
      description: 'Description for Culture',
    },
    {
      image: './axios/veda.jpg',
      title: 'Vedas & Vedic',
      description: 'Description for Vedas & Vedic',
    },
  ];
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);
  return (
    <>
    <div className="landingSection">
      <Navbar 
        ShowLoginHandler={() => navigate('/login')} 
        ShowRegister={() => navigate('/register')} 
      />
        <Sidebar 
          ShowArticle={() => navigate('/add-article')} 
          ShowEvent={() => navigate('/add-event')} 
          ShowFestival={() => navigate('/add-festival')} 
          ShowArticlesTable={() => navigate('/article-list')} 
          ShowEventList={() => navigate('/event-list')} 
          ShowFestivalList={() => navigate('/festival-list')}
          ShowTeam={() => navigate('/team')}
          ShowUpdates={() => navigate('/updates')}
        />
      
      
        <div className="mainContent">
          <IndividualIntervalsExample 
            navigateToArticle={navigateToArticle}
            navigateToEvent={navigateToEvent}
            navigateToFestival={navigateToFestival}
          />
          <div className="contentSection">
            <YouTubeLive />
            <LatestArticles />
          </div>
          <div className="contentSection veda-yoga">
            <VedhasCard />
            <YogasCard />
          </div>
          <div>
            <CardContainer cards={cards} />
          </div>
          <Footer showDonation={() => navigate('/donation')} />
          <Footer2 />
          <TestToast />
        </div>
      </div>
   
    </>
  );
};

export default LandingPage;
