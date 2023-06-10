import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import Details from './components/Scholarship/Details';
import Testinomial from './components/Testinomial/Testinomial';
import Faq from './components/FAQ page/FAQs';
import Blog from './components/Blog/Blog';
import AllBlogs from './components/Blog/AllBlogs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/testimonial" element={<Testinomial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog/" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;

