import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    },
}
);


axiosInstance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `${JSON.parse(localStorage.getItem('userInfo'))?.user?.token}`;
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;

