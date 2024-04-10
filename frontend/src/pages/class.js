
import React, { useEffect, useState } from 'react';
import Card from '../components/classCard';
import classService from '../services/http/class';

import ClassDetailCard from '../components/classDetailCard';
import { useNavigate,useLocation } from 'react-router-dom';


const Class = () => {
  const [classData, setClassData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchClass = async () => {
      try {
       
        const response = await classService.getClass();
        localStorage.setItem('classData', JSON.stringify(response.classes));
        setClassData(response.classes);
      } catch (error) {
        console.error('Error fetching Class:', error);
      }
    };

    
    fetchClass();
  }, []); 
  
  useEffect(() => {
    console.log("Updated classData:", classData);
    
  }, [classData]); 
  const handleClassDetailClick = (classItem) => {
    localStorage.removeItem('classItem');
    localStorage.setItem('classItem', JSON.stringify(classItem));
    navigate('/class-detail');
    console.log('Class detail button clicked for:', classItem);
  };
  

  return (
    <div className="flex flex-col items-center mt-32">
    <h1 className="mb-4">Classes</h1>
    
    <div className="flex flex-wrap justify-center gap-4">
      {classData.map((classItem, index) => (
          <Card 
          key={index} 
          className={classItem.className} 
          onClassDetailClick={() => handleClassDetailClick(classItem)}
        />
      ))}
    </div>
  </div>
  );
};

export default Class;
