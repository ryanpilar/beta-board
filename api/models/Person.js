import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: {
        type: String
    },
    maxGrade: {        
        type: Number,
    },
    gender: {
        type: String
    },
    height: {
        type: Number,
    },
    notes: {
        type: String
    }
    
})

export default mongoose.model('Person', PersonSchema)