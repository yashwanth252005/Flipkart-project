import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

export const Product1 = mongoose.model("Product1", productSchema);

export const Product2 = mongoose.model("Product2", productSchema);

export const Product3 = mongoose.model("Product3", productSchema);

export const Product4 = mongoose.model("Product4", productSchema);
