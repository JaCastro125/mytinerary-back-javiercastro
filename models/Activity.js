import { Schema, model } from "mongoose";

const collection = 'activities'

const schema = new Schema ({
    name: { type: String, required: false },
    photo: { type: String, required: false },
}, {    
    timestamps: true
})

const Activity = model(collection, schema)

export default Activity;