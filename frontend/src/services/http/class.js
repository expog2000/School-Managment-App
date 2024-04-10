import axios from 'axios';

class ClassService {
    async getClass() {
        try {
            const response = await axios.get('http://localhost:3005/api/class/class-list');
            console.log("data1", response.data);
            return response.data;
        } catch (error) {
            console.error('Error in getClass:', error);
            return []; 
        }
    }
    async getStudent() {
        try {
            const classData = JSON.parse(localStorage.getItem('classItem'));

      
        console.log("class",classData.className)
        
        
        const response = await axios.get('http://localhost:3005/api/class/student-list', {
            params: {
                className: classData.className
              }
        });
          console.log("data1", response.data);
          return response.data;
        } catch (error) {
          console.error('Error in getStudent:');
          return []; 
        }
    }
}

const classService = new ClassService();
export default classService;
