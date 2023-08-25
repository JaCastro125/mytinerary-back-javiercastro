import { Schema, model, Types } from "mongoose";

const collection = 'itinerarys'

const schema = new Schema ({
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    image: {type: String, required: false},
    name: {type: String, required: true},
    like: {type: Number, required: false},
    hashtag: {type: String, required: false},
    activity: {type: String, required: false},
}, {
    timestamps: true
})

export default function Itinerary(collection, schema) {
 
}
