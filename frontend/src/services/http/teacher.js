import axios from 'axios';

class TeacherService {
    async registerTeacher(teacherData) {
        try {
            console.log("data4",teacherData)
            
            const response = await axios.post('https://ba43-2402-e280-219a-2de-b585-d1f3-44d0-f2c3.ngrok-free.app/api/teacher', teacherData);
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in registerTeacher:', error.response ? error.response.data : error.message);
            return []; 
        }
    }
    async getTeacher() {
        try {
            const response = await axios.get('https://ba43-2402-e280-219a-2de-b585-d1f3-44d0-f2c3.ngrok-free.app/api/teacher/teacher-list');
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getTeacher:', error);
            return []; 
        }
    }
    async getTeacherSalary() {
        try {
            const response = await axios.get('https://ba43-2402-e280-219a-2de-b585-d1f3-44d0-f2c3.ngrok-free.app/api/teacher/total-salary');
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getTeacher:', error);
            return []; 
        }
    }
    
    async deleteTeacher(teacherId) {
        try {
            console.log("id8",teacherId)
            
            const response = await axios.delete('https://ba43-2402-e280-219a-2de-b585-d1f3-44d0-f2c3.ngrok-free.app/api/teacher/delete', {
                data:{
                    teacherId:teacherId}});
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in deleteTeacher:', error.response ? error.response.data : error.message);
            return []; 
        }
    }
}

const teacherService = new TeacherService();
export default teacherService;
