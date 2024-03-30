import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AnchorSchema = new Schema({
    name: {
        type: String
    },
    routes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route'
    }],
    height: {
        type: Number
    },
    bolts: {
        type: Number
    }
})

export default mongoose.model('Anchor', AnchorSchema)