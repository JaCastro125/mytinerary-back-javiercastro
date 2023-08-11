import { Schema, model, Types } from "mongoose";

const collection = 'cities'
const schema = new Schema ({
    country: {type: String, required: true},
    city: {type: String, required: true},
    image: {type: String, required: true},
    date: {type: Date, required: true},
    detail: {type: String, required: true},
    price: {type: Number, required: true},
}, {
    timestamps: true
})

const City = model(collection, schema)
export default City;