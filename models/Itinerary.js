import { Schema, model, Types } from "mongoose";

const collection = 'itineraries'

const schema = new Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    like: { type: Number, required: false },
    user: { type: Types.ObjectId, ref: 'users' },
    activities: [{ type: Types.ObjectId, ref:'activities'}],
    hashtags: [{ type: String, required: false }],
    comments: [{
        comment: { type: String, required: false },
        user: { type: Types.ObjectId, ref: 'users' },
    },
    ]
}, {
    timestamps: true
})

const Itinerary = model(collection, schema)

export default Itinerary;
