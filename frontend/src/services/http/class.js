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
}

const classService = new ClassService();
export default classService;
