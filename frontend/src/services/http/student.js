import axios from 'axios';

class StudentService {
    async registerStudent(studentData) {
        try {
            console.log("data4",studentData)
            
            const response = await axios.post('http://localhost:3005/api/student', studentData);
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in registerStudent:', error.response ? error.response.data : error.message);
            return []; 
        }
    }
    async getStudents() {
        try {
            const response = await axios.get('http://localhost:3005/api/student/student-list');
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getStudent:', error);
            return []; 
        }
    }
    
    async deleteStudent(studentId) {
        try {
            console.log("id1",studentId)
            
            const response = await axios.delete('http://localhost:3005/api/student/delete', {
                data:{
                    studentId:studentId}});
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in deleteStudent:', error.response ? error.response.data : error.message);
            return []; 
        }
    }
    async getStudentSalary() {
        try {
            const response = await axios.get('http://localhost:3005/api/student/total-fees');
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getStudentSalary:', error);
            return []; 
        }
    }
}

const studentService = new StudentService();
export default studentService;
