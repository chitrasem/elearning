
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CoursesList from './components/CoursesList';
import CourseDetail from './components/CourseDetail';

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course data from the API endpoint
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/course');
        if (response.ok) {
          const data = await response.json();
          setCourses(data); // Update courses state with fetched data
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures useEffect runs only once (on mount)


  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/courses" element={<CoursesList courses={courses} />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
