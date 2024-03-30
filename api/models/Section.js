import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SectionSchema = new Schema({
    name: {
        type: String
    },
    anchors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Anchor'
    }],
    routes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route'
    }]
    
})

export default mongoose.model('Section', SectionSchema)