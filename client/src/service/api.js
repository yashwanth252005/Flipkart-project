import axios from "axios";

const URL = "https://flipkart-clone-backend-2ise.onrender.com";

export const authenticateSignUp = async(data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup API', error);
        return error;
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login API', error);
        return error;
    }
};
