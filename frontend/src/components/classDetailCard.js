import React, { useEffect, useState } from 'react';
import classService from '../services/http/class';

const ClassDetailCard = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [classData, setClassData] = useState({});

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const classData = getClassDataFromLocalStorage();
        setClassData(classData);

        const response = await classService.getStudent();
        console.log("response",response)
        const students  = response;
        console.log("students",students)
        
        let male = 0;
        let female = 0;

        students.forEach(student => {
          const gender = student.gender.toLowerCase(); // Normalize gender
          if (gender === 'male') {
            male++;
          } else if (gender === 'female') {
            female++;
          }
        });

        setMaleCount(male);
        setFemaleCount(female);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  const getClassDataFromLocalStorage = () => {
    const classData = localStorage.getItem('classItem');
    return classData ? JSON.parse(classData) : {};
  };

  // Render the component with maleCount and femaleCount
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{classData.className}</div>
          <p className="text-gray-700 text-base">Year: {classData.year}</p>
          <p className="text-gray-700 text-base">Fees: {classData.studentFees}</p>
          <p className="text-gray-700 text-base">Male Students: {maleCount}</p>
          <p className="text-gray-700 text-base">Female Students: {femaleCount}</p>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Student List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailCard;
