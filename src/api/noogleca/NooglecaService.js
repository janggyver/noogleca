import axios from 'axios';

class NooglecaService{

    executeNooglecaService(){
        return axios.get('http://localhost:8080/noogle-ca');
    }

    executeNooglecaBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/noogle-ca-bean');        
    }
}

export default new NooglecaService()