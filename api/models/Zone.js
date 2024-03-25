import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ZoneSchema = new Schema({
    name: {
        type: String
    },
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    }]
    
})

export default mongoose.model('Zone', ZoneSchema)