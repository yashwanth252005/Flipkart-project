import { products1, products2, products3, products4 } from './constants/data.js'
import { Product1, Product2, Product3, Product4 } from './model/product-schema.js'

const DefaultData = async () => {
    try {
        await Product1.insertMany(products1);
        await Product2.insertMany(products2);
        await Product3.insertMany(products3);
        await Product4.insertMany(products4);
        console.log("four Data Inserted Successfully");
    } catch (error) {
        console.log("error while inserting default data", error.message);
    }
}

export default DefaultData;