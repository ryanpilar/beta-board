import mongoose from 'mongoose'

const Schema = mongoose.Schema

const GradeSchema = new Schema({
    difficulty: {
        type: String
    },
    variant: {        
        type: String,
    },
    greaseFactor: {
        type: String
    },
    isBoulder: {
        type: Boolean,
        required: true
    }
    
})

export default mongoose.model('Grade', GradeSchema)