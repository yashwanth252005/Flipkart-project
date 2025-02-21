import { Product1, Product2, Product3, Product4 } from '../model/product-schema.js';


export const getProducts = async (req, res) => {
    try {
        const products1 = await Product1.find({});
        const products2 = await Product2.find({});
        const products3 = await Product3.find({});
        const products4 = await Product4.find({});
        res.json({ products1, products2, products3, products4 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    const id = req.params.id.toString();
    
    try {
        let product = await Product1.findOne({ id }) ||
                      await Product2.findOne({ id }) ||
                      await Product3.findOne({ id }) ||
                      await Product4.findOne({ id });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error.message);
        res.status(500).json({ message: error.message });
    }
};
