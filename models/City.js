import { Schema, model, Types } from "mongoose";

const collection = 'cities'

const schema = new Schema ({
    country: {type: String, required: true},
    city: {type: String, required: true},
    image: {type: String, required: false},
    comment: {type: String, required: false},
    itineraries: [{type: Types.ObjectId, ref:'itineraries'}]
}, {
    timestamps: true
})

const City = model(collection, schema)

export default City;
