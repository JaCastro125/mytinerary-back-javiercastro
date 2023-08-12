import { Schema, model, Types } from "mongoose";

const collection = 'cities'
const schema = new Schema ({
    country: {type: String, required: true},
    city: {type: String, required: true},
    image: {type: String, required: false},
    date: {type: Date, required: false},
    detail: {type: String, required: false},
    price: {type: Number, required: true},
    /* user: {type: Types.ObjectId, ref:'users'}, */
}, {
    timestamps: true
})

const City = model(collection, schema)
export default City;
