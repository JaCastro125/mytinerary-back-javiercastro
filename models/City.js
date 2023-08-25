import { Schema, model, Types } from "mongoose";

const collection = 'cities'

const schema = new Schema ({
    country: {type: String, required: true},
    city: {type: String, required: true},
    image: {type: String, required: false},
    comment: {type: String, required: false},
    user: {type: Types.ObjectId, ref:'users'},
}, {
    timestamps: true
})

const City = model(collection, schema)

export default City;
