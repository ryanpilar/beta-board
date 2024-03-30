import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LocationSchema = new Schema({
    name: {
        type: String
    },
    zones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
    }]
    
})

export default mongoose.model('Location', LocationSchema)