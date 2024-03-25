import mongoose from 'mongoose'

const Schema = mongoose.Schema

const StyleSchema = new Schema({
    risk: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    intensity: {        
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    complexity: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },      
})

export default mongoose.model('Style', StyleSchema)