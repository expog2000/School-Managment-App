import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddClass = () => {
  // State variables to store class details, added classes, error message, and whether to show class details
  const [className, setClassName] = useState('');
  const [year, setYear] = useState('');
  const [studentFees, setStudentFees] = useState('');
  const [addedClasses, setAddedClasses] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all added classes
  const fetchClasses = async () => {
    try {
      const response = await axios.get('/api/classes');
      setAddedClasses(response.data);
    } catch (error) {
      setError('Failed to fetch classes. Please try again.');
      console.error('Error fetching classes:', error.response.data);
    }
  };

  // Fetch all added classes on component mount
  useEffect(() => {
    fetchClasses();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create data object with class details
    const data = {
      className,
      year,
      studentFees
    };

    try {
      // Send POST request to add class
      const response = await axios.post('https://41e9-2402-e280-219a-2de-f1f1-9ffa-d97a-72dc.ngrok-free.app/api/class', data);
      
      // Add the new class to the list of added classes
      setAddedClasses([...addedClasses, response.data]);
      
      // Clear form fields
      setClassName('');
      setYear('');
      setStudentFees('');
      
      // Clear error message
      setError(null);
    } catch (error) {
      // Handle error
      setError('Failed to add class. Please try again.');
      console.error('Error adding class:', error.response.data);
    }
  };

  // Function to handle viewing class details
  const handleView = (classId) => {
    // Navigate to the class details page or expand class details in the component
    // Implementation depends on your application's routing mechanism
  };

  // Function to handle deleting class
  const handleDelete = async (classId) => {
    console.log(classId);
    try {
      // Send DELETE request to delete class
      await axios.delete('https://41e9-2402-e280-219a-2de-f1f1-9ffa-d97a-72dc.ngrok-free.app/api/class/delete', {
        data: { classId } // classId included as a part of request body
      });      
      // Remove the deleted class from the list of added classes
      setAddedClasses(addedClasses.filter(cls => cls._id !== classId));
    } catch (error) {
      // Handle error
      console.error('Error deleting class:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Add Class</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Class Name:</label>
          <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Student Fees:</label>
          <input type="number" value={studentFees} onChange={(e) => setStudentFees(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Added Classes</h3>
      <ul>
        {addedClasses.map(cls => (
          <li key={cls._id}>
            <strong>{cls.className}</strong> - Year: {cls.year}, Student Fees: {cls.studentFees}
            <button onClick={() => handleView(cls._id)}>View</button>
            <button onClick={() => handleDelete(cls._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddClass;