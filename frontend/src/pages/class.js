
import React, { useEffect, useState } from 'react';
import Card from '../components/classCard';
import classService from '../services/http/class';


const Class = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchClass = async () => {
      try {
       
        const response = await classService.getClass();
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
