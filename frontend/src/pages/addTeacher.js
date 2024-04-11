import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import teacherService from '../services/http/teacher';


const AddTeacher = () => {
    const [teacherDetails, setTeacherDetails] = useState({
        name: '',
        DOB: '',
        gender: '',
        salary:'',
        className:'',
        contact:''
      });
      const navigate=useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherDetails({ ...teacherDetails, [name]: value });
      };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, DOB, gender, salary, className, contact } = teacherDetails;

        if (!name || !DOB || !gender  || !salary || !contact) {
          alert('These fields are mandatory!');
          return;
        }
    
        
        console.log('Submitted student Details:', teacherDetails);
        const response = await teacherService.registerTeacher({ name,DOB,gender,salary,className,contact });

        
        console.log("Response from registration:", response);
        navigate('/teacher')
      };
    
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Register Teacher</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-black">
        <table className="min-w-full">
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name (Required):</label>
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={teacherDetails.name}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <label htmlFor="DOB" className="block text-sm font-medium text-gray-700">DOB (Required):</label>
              </td>
              <td className="px-4 py-2">
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  value={teacherDetails.DOB}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">Gender (Required):</label>
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={teacherDetails.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label htmlFor="Contact" className="block text-sm font-medium text-gray-700"> Contact (Required):</label>
              </td>
              <td className="px-4 py-2">
              <input
                type="text"
                name="contact" 
                id="contact"
                value={teacherDetails.contact}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />

              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <label htmlFor="Feespaid" className="block text-sm font-medium text-gray-700"> Salary (Required):</label>
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="salary"
                  id="salary"
                  value={teacherDetails.feesPaid}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label htmlFor="className" className="block text-sm font-medium text-gray-700"> Class Name (Required):</label>
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  name="className"
                  id="className"
                  value={teacherDetails.className}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="text-center py-4">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddTeacher;
