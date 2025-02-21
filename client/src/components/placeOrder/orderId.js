import { v4 as uuidv4 } from 'uuid';

const generateOrderId = () => {
    return `${uuidv4()}`;
};


export default generateOrderId;