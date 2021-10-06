import axios from'axios';

const instance= axios.create({
    baseURL:'http://localhost:5000' //the api (cloud function)url
});

export default instance;