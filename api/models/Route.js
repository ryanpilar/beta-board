import mongoose from 'mongoose'

const Schema = mongoose.Schema

const RouteSchema = new Schema({
    name: {
        type: String
    },
    anchorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Anchor'
    },
    grade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grade'  
    },
    color: {
        type: String,
    },
    date: {
        type: Date,
    },
    person: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }],
    style: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Style'
    },
    otherProperties: {
        kidFriendly: {
            type: Boolean,
            default: false, 
        },
        climbType: {
            type: [{
                type: String,
                enum: ['Top rope', 'Lead', 'Boulder'], 
            }]            
        },
        isCompetitionClimb: {
            type: Boolean,
            default: false, 
        },
        crossesMultipleLines: {
            type: Boolean,
            default: false, 
        },
        isDynamic: {
            type: Boolean,
            default: false,  
        },
    }    
})

export default mongoose.model('Route', RouteSchema)